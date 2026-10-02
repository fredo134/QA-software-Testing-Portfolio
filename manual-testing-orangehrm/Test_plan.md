# 🧪 Master Test Plan: OrangeHRM Enterprise QA

## 1. Scope & System Under Test
* **Application Target:** OrangeHRM Demo Platform (User Management & Leave Allocation Modules)
* **In-Scope:**
  * **User Management:** System User creation, role assignment (Admin vs. ESS), status changes, password policy enforcement, and input sanitization (XSS/SQLi).
  * **Leave Allocation:** Entitlement assignment, duration calculations, overlapping request validation, and approval workflow state changes.
* **Out-of-Scope:** Payroll processing, Recruitment module, and third-party integrations.

## 2. Testing Strategy & Techniques
* **Equivalence Partitioning (EP):** Grouping input data into valid/invalid partitions (e.g., password length, leave balance bounds).
* **Boundary Value Analysis (BVA):** Testing minimum, maximum, off-by-one, and extreme thresholds[cite: 1].
* **Security & Negative Testing:** XSS payload injections in text fields, session invalidation mid-action, and unauthorized URL access[cite: 1].

## 3. Entry & Exit Criteria
* **Entry Criteria:**
  * Target environment accessible with stable connectivity.
  * Admin and standard employee credentials available.
  * Requirements matrix finalized.
* **Exit Criteria:**
  * 100% of planned test scenarios executed.
  * 0 Critical or High severity open defects remaining[cite: 1].
  * Requirements Traceability Matrix (RTM) shows complete test coverage[cite: 2].

## 4. Test Environments
* **Browsers:** Chrome v122+, Firefox v123+
* **OS:** Windows 11, macOS Sonoma
* **Network:** Standard broadband & simulated throttled 3G

## 5. Risk Analysis & Mitigation
| Risk Description | Impact | Likelihood | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| Public demo platform resets data periodically | High | High | Re-run setup preconditions before executing state-dependent tests. |
| Shared credentials cause session logouts mid-test | Medium | High | Re-authenticate immediately and capture dynamic session parameters. |
