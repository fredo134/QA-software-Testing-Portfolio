# 💳 Paystack Sandbox Checkout UI & API Automation Suite

An end-to-end payment test automation framework built with **Playwright (JavaScript)**, **Page Object Model (POM)**, and **dotenv**. This suite combines Paystack's REST API (`POST /transaction/initialize` and `GET /transaction/verify/{reference}`) with automated Chromium browser checkout flows to validate transaction integrity from initialization through settlement.

---

## 🛠️ Tech Stack
- **Automation Framework:** Playwright (`@playwright/test`)
- **Language:** JavaScript (Node.js)
- **Design Pattern:** Page Object Model (POM)
- **API & UI Hybrid Testing:** Playwright `request` fixture + `page` browser automation
- **Secret Management:** `dotenv` (`.env` excluded via `.gitignore`)

---

## 📁 Project Structure

```text
paystack-checkout-ui/
├── pages/
│   └── PaystackCheckoutPage.js    # Page Object encapsulating Paystack modal locators & actions
├── tests/
│   ├── checkout-success.spec.js   # Happy-path API init -> UI payment -> API verify ('success')
│   ├── amount-mismatch.spec.js    # Validates initialized kobo amount against expected value
│   └── payment-failed.spec.js     # Simulates declined/failed payment & verifies non-success status
├── .env.example                   # Template for required environment variables
├── .gitignore                     # Excludes .env, node_modules, and test artifacts
├── package.json
└── playwright.config.js
```

## 🧪 Test Scenarios Covered

| Spec File | Scenario | Validation Flow |
| :--- | :--- | :--- |
| `checkout-success.spec.js` | Happy-Path Payment | Initializes transaction via API &rarr; selects **Success** in Paystack Sandbox UI &rarr; submits payment &rarr; verifies `status === 'success'` via API |
| `amount-mismatch.spec.js` | Amount Integrity Check | Initializes transaction in kobo (`50000` = NGN 500) &rarr; verifies recorded transaction amount matches initialized payload and flags mismatched expectations (`100000`) |
| `payment-failed.spec.js` | Failed / Declined Payment | Initializes transaction via API &rarr; selects decline/failure option in Paystack Sandbox UI &rarr; confirms UI error state and verifies API status is not `'success'` |


## ⚙️ Setup & Execution

### 1. Install Dependencies
```bash
npm install
npx playwright install chromium
```
### 2. Configure Environment Variables
- **Create a `.env` file in the project root (or copy `.env.example`) and add your Paystack Test Secret Key:**
```bash
PAYSTACK_SECRET_KEY=sk_test_your_secret_key_here
```
### 3. Run the Tests

- **Run all tests sequentially in headed mode:**
  ```bash
  npx playwright test --project=chromium --headed --workers=1
  ```
  - **Run an individual test file:**
  ```bash
  npx playwright test tests/checkout-success.spec.js --project=chromium --headed
    ```
  - **View the HTML test report:**
  ```bash
  npx playwright show-report
```
