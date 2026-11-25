# 💳 Paystack Sandbox API Testing Suite

Automated REST API test suite built with **Postman** and executed via **Newman CLI** against Paystack's Test Mode (`https://api.paystack.co`).

## Covered Endpoints & Scenarios
1. **POST `/transaction/initialize`** — Initializes a ₦500 (50,000 kobo) payment and dynamically captures `reference` and `authorization_url`.
2. **GET `/transaction/verify/{{tx_reference}}`** — Verifies transaction details, amount, and NGN currency using the chained reference.
3. **GET `/transaction`** — Validates transaction listing, response array structure, and latency (< 1500ms).
4. **GET `/transaction/verify/invalid_ref_999999`** — Negative test verifying `400 Bad Request` handling for invalid references.

## How to Run Locally
```bash
newman run collections/Paystack_Sandbox_API_Suite.postman_collection.json \
  -e environments/Paystack_Sandbox.postman_environment.json \
  --env-var "secret_key=YOUR_SK_TEST_KEY" \
  -r htmlextra --reporter-htmlextra-export reports/index.html
```
Commit and push to GitHub:

```Bash
git add API_testing/paystack-sandbox/
git commit -m "feat: add Paystack Sandbox API test suite and Newman report"
git push origin main
```
