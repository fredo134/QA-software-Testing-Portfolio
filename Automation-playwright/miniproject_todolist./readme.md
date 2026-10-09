
# 🎭 Playwright E2E Automation - TodoMVC App

This repository showcases automated End-to-End (E2E) UI testing using **Playwright** with **JavaScript** against the React implementation of [TodoMVC](https://todomvc.com/examples/react/dist/).

## 🚀 Key Features & Test Scenarios Covered

- **Dynamic Data Insertion:** Iterative task creation using array loops.
- **State Manipulation:** Checking items off, completing tasks, and batch deletion ("Clear completed").
- **View Filtering Verification:** Asserting visibility and count across `All`, `Active`, and `Completed` tabs.
- **Strict Assertions:** Utilizing Playwright's auto-retrying web-first assertions (`toHaveCount`, `toHaveText`).

## 🛠️ Tech Stack

- **Framework:** Playwright (`@playwright/test`)
- **Language:** JavaScript
- **Target Application:** TodoMVC (React)

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/fredo134/QA-software-Testing-Portfolio.git](https://github.com/fredo134/QA-software-Testing-Portfolio.git)
   cd QA-software-Testing-Portfolio/Automation-playwright/miniproject_todolist.
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

- **Run tests in headless mode (default):**
  ```bash
  npx playwright test
  ```

- **Run tests with interactive UI Mode:**
  ```bash
  npx playwright test --ui
  ```

- **View HTML Test Execution Report:**
  ```bash
  npx playwright show-report
  ```
