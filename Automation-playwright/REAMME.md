# 🎭 Playwright Automation Portfolio

Welcome to the Playwright Automation hub! This directory serves as a central collection for all End-to-End (E2E) web automation projects built with **Playwright**.

---

## 📂 Projects Directory

| Project Directory | Target Application | Key Concepts & Scenarios | Status |
| :--- | :--- | :--- | :--- |
| 📁 [**`miniproject_todolist.`**](./miniproject_todolist) | [TodoMVC React App](https://todomvc.com/examples/react/dist/) | Dynamic Data Insertion, State Manipulation, Filtering Assertions | ✅ Completed |
| 📁 [**`paystack-checkout-ui/`**](./Paystack_checkout_ui) | [Paystack Sandbox API & Checkout](https://paystack.com) | API + UI Hybrid Flow, Page Object Model (POM), Amount Mismatch & Failed Payment | ✅ Completed |

---

## 🛠️ Tech Stack & Tools

- **Framework:** Playwright (`@playwright/test`)
- **Languages:** JavaScript / TypeScript
- **Test Runner:** Playwright Test Runner
- **CI/CD:** GitHub Actions

---

## 📄 Project Documentation

Each sub-folder in this directory is a self-contained Playwright project with its own dependencies, configuration, test scripts, and dedicated setup guide:

1. 📑 [**TodoList Mini-Project Documentation**](./miniproject_todolist/README.md) – Automated E2E test suite covering task creation, state toggling, active/completed filtering, and batch clearing on TodoMVC.
2. 📑 [**Paystack Checkout UI & API Documentation**](./Paystack_checkout_ui/README.md) – Hybrid API + UI checkout automation built with POM and `dotenv`, covering happy-path payment, amount mismatch detection, and failed payment simulation.
