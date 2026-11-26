const { expect } = require('@playwright/test');

class PaystackCheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.successTestOption = page.getByText('Success', { exact: true });
    this.failedTestOption = page.getByText(/declin|fail|insufficient|expired|auth/i).first();
    this.payButton = page.getByRole('button', { name: /pay/i });
    this.paymentSuccessText = page.getByText(/payment successful/i);
    this.paymentFailedText = page.getByText(
      /declin|fail|unable to process|not completed|try again|error|invalid/i
    ).first();
  }

  async openCheckout(authorizationUrl, customerEmail) {
    await this.page.goto(authorizationUrl);
    const emailPrefix = customerEmail.split('@')[0].slice(0, 2);
    await expect(this.page.getByText(new RegExp(`^${emailPrefix}`, 'i')).first()).toBeVisible({
      timeout: 15000,
    });
    await expect(this.payButton).toBeVisible({ timeout: 15000 });
  }

  async completeSandboxPayment() {
    await this.successTestOption.waitFor({ state: 'visible', timeout: 15000 });
    await this.successTestOption.click();
    await this.payButton.click();
    await expect(this.paymentSuccessText).toBeVisible({ timeout: 20000 });
  }

  async failSandboxPayment() {
    await this.failedTestOption.waitFor({ state: 'visible', timeout: 15000 });
    await this.failedTestOption.click();
    await this.payButton.click();
    await expect(this.paymentFailedText).toBeVisible({ timeout: 20000 });
  }
}

module.exports = { PaystackCheckoutPage };