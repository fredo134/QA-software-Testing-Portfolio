# 🗺️ Requirements Traceability Matrix (RTM) — OrangeHRM Module

| Requirement ID | Business Requirement Description | Test Case ID(s) | Status | Defect ID |
| :--- | :--- | :--- | :---: | :---: |
| **REQ-UM-01** | Admins can create new system users with assigned roles[cite: 1]. | TC_UM_001, TC_UM_010 | **PASS** | N/A |
| **REQ-UM-02** | Usernames must be unique (5-40 chars)[cite: 1]. | TC_UM_002, TC_UM_003, TC_UM_004 | **PASS** | N/A |
| **REQ-UM-03** | Input sanitization against script injections (XSS)[cite: 1]. | TC_UM_005, TC_UM_006 | **PASS** | N/A |
| **REQ-UM-04** | Disabled accounts must be blocked from logging in[cite: 1]. | TC_UM_008 | **PASS** | N/A |
| **REQ-UM-05** | Passwords must satisfy security rules (8+ chars)[cite: 1]. | TC_UM_007 | **PASS** | N/A |
| **REQ-LA-01** | Leave entitlements must range between 0.01 and 365 days[cite: 1]. | TC_LA_001, TC_LA_002, TC_LA_003, TC_LA_004 | **FAIL** | Issue #5 |
| **REQ-LA-02** | Prevent overlapping leave date applications[cite: 1]. | TC_LA_006 | **PASS** | N/A |
| **REQ-LA-03** | State transitions update employee leave balance[cite: 1]. | TC_LA_007, TC_LA_008 | **PASS** | N/A |
| **REQ-LA-04** | Role-based direct URL access protection[cite: 1]. | TC_LA_010 | **PASS** | N/A |
