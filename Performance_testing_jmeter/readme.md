# 🚀 API Performance & Load Testing with Apache JMeter

## 📌 Project Overview
This repository contains a performance and load testing suite built with **Apache JMeter** to simulate concurrent user traffic and evaluate response times, throughput, and error rates against RESTful API endpoints (`jsonplaceholder.typicode.com`).

## 🧪 Test Execution Details
- **Tool:** Apache JMeter 5.x
- **Target Host:** `https://jsonplaceholder.typicode.com`
- **Simulated Users (Number of Threads):** 40 concurrent virtual users
- **Ramp-Up Period:** 10 seconds (4 users spawned per second)
- **Loop Count:** 2 iterations per user
- **Total Request Samples:** 160 total requests (80 GET + 80 POST)

## 📊 Scenarios Tested
1. **GET `/posts`** – Evaluated API latency and response time under concurrent read traffic.
2. **POST `/posts`** – Simulated dynamic resource creation payload under concurrent write load.

## 📈 Key Metrics & Results
- **Error Rate:** `0.00%` (100% Success Rate across all requests)
- **GET Response Time:** ~132 ms average latency
- **POST Response Time:** ~375 ms average latency
- **Listeners Used:** View Results Tree, Summary Report, Aggregate Report
- 

[Summary Report](./Summary_report.png/) And 
[Aggregate Report](./Aggregate_report.png/)
## 📊 JMeter Aggregate Performance Report

| Endpoint | Samples | Average | Median | 90% Line | 95% Line | 99% Line | Error % | Throughput |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **01 - GET Fetch Users** | 80 | 129 ms | 126 ms | 137 ms | 158 ms | 266 ms | 0.00% | 7.9/sec |
| **02 - POST Create User** | 80 | 375 ms | 363 ms | 398 ms | 442 ms | 535 ms | 0.00% | 7.8/sec |
| **TOTAL** | **160** | **252 ms** | **134 ms** | **386 ms** | **415 ms** | **525 ms** | **0.00%** | **15.8/sec** |

## 🛠️ How to Run
1. Clone this repository.
2. Open Apache JMeter.
3. Open `JSONPlaceholder_Performance_LoadTest.jmx`.
4. Click the green **Play (▶)** button to execute the suite.
