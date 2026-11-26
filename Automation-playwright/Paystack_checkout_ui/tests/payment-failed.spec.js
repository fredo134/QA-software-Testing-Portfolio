require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { PaystackCheckoutPage } = require('../pages/PaystackCheckoutPage');

const BASE_URL = 'https://api.paystack.co';
const SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

test.describe('Paystack Checkout - Failed Payment', () => {
  test.skip(!SECRET_KEY, 'Set PAYSTACK_SECRET_KEY in .env to run this test');

  test('Simulate failed payment in Paystack Sandbox checkout UI', async ({ page, request }) => {
    const email = 'qa.failedpayment@example.com';

    const initRes = await request.post(`${BASE_URL}/transaction/initialize`, {
      headers: {
        Authorization: `Bearer ${SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      data: {
        email,
        amount: '50000',
      },
    });

    expect(initRes.status()).toBe(200);
    const initJson = await initRes.json();
    const { authorization_url, reference } = initJson.data;

    const checkoutPage = new PaystackCheckoutPage(page);
    await checkoutPage.openCheckout(authorization_url, email);
    await checkoutPage.failSandboxPayment();

    const verifyRes = await request.get(`${BASE_URL}/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${SECRET_KEY}`,
      },
    });

    expect(verifyRes.status()).toBe(200);
    const verifyJson = await verifyRes.json();
    expect(verifyJson.data.status).not.toBe('success');
  });
});