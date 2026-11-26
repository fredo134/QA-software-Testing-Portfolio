require('dotenv').config();
const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://api.paystack.co';
const SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

test.describe('Paystack Checkout - Amount Validation', () => {
  test.skip(!SECRET_KEY, 'Set PAYSTACK_SECRET_KEY in .env to run this test');

  test('Detect amount mismatch between expected and initialized transaction', async ({ request }) => {
    const email = 'qa.mismatch@example.com';
    const initializedAmountKobo = 50000; // NGN 500
    const expectedAmountKobo = 100000; // Intentional mismatch: NGN 1,000

    const initRes = await request.post(`${BASE_URL}/transaction/initialize`, {
      headers: {
        Authorization: `Bearer ${SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      data: {
        email,
        amount: String(initializedAmountKobo),
      },
    });

    expect(initRes.status()).toBe(200);
    const initJson = await initRes.json();
    const { reference } = initJson.data;

    const verifyRes = await request.get(`${BASE_URL}/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${SECRET_KEY}`,
      },
    });

    expect(verifyRes.status()).toBe(200);
    const verifyJson = await verifyRes.json();

    expect(verifyJson.data.amount).toBe(initializedAmountKobo);
    expect(verifyJson.data.amount).not.toBe(expectedAmountKobo);
  });
});