

## 📌 Project Overview
This Folder contains a multi-tier load test suite executing concurrent transactional scenarios against the RESTful-Booker public API using Apache JMeter in headless CLI mode.

## 🎯 Test Objectives & SLA Criteria
* **Target Users:** 50, 100, and 250 Virtual Users (VU) over a 30-second ramp-up period.
* **SLA Target 1:** Response Time < 3000 ms for core transactional samplers.
* **SLA Target 2:** Response Status Code = 200 OK across all operations.

## 📊 Summary Performance Comparison

| Metric | Baseline (50 VUs) | Optimal Load (100 VUs) | Peak Stress (250 VUs) |
| :--- | :---: | :---: | :---: |
| **Total Requests** | 150 | 300 | 300 |
| **Overall Error Rate** | 22.67% | **0.00%** | 5.67% |
| **Throughput (req/sec)** | 4.51 trans/s | **9.68 trans/s** | 9.62 trans/s |
| **Average Response Time** | 2,144.43 ms | **604.88 ms** | 814.14 ms |
| **90th Percentile Latency** | 7,281.20 ms | **1,209.90 ms** | 1,231.90 ms |
| **APDEX Performance Index**| 0.630 (Fair) | **0.825 (Good)** | 0.740 (Tolerating) |

## 🔍 Key Findings & System Bottlenecks
1. **Optimal System Capacity:** The API performs best under **100 concurrent users**, achieving **9.68 req/sec throughput** with zero errors and sub-315ms latency for core booking requests.
2. **Authentication Bottleneck (`/auth`):** Accounted for 88%+ of all failure events during stress testing due to server-side rate limits and queuing delays.
3. **Throughput Saturation:** Increasing load from 100 to 250 VUs did not yield higher throughput (9.68 vs 9.62 req/sec), indicating the application processing ceiling was reached.
