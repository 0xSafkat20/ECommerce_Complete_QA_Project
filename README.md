# E-Commerce Complete QA Project

A recruiter-oriented QA portfolio project demonstrating **manual testing, API testing, SQL/database validation, Playwright automation, traceability, defect reporting, exploratory testing, and CI/CD**.

## Test Targets
- **Web UI:** SauceDemo — `https://www.saucedemo.com/`
- **REST API:** DummyJSON Products/Carts — `https://dummyjson.com/docs`

The UI and API targets are separate public demo systems so this repository can demonstrate both browser and backend QA skills without claiming access to a private e-commerce backend.

## Portfolio Coverage
- 35 requirements
- 80 test scenarios
- 130 manual/API/database test cases
- Requirement Traceability Matrix (RTM)
- Defect log with clearly labeled hypothetical templates
- 8 exploratory testing charters
- Postman API collection with positive/negative assertions
- PostgreSQL sample schema + seed + 25+ validation queries
- Playwright + TypeScript Page Object Model framework
- 20+ automated UI tests
- Cross-browser projects: Chromium, Firefox, WebKit
- HTML reports, screenshots, trace-on-retry
- GitHub Actions CI

## Repository Structure
```text
ECommerce_Complete_QA_Project/
├── documentation/
│   ├── QA_Documentation.xlsx
│   ├── requirements.csv
│   ├── test_scenarios.csv
│   ├── test_cases.csv
│   ├── rtm.csv
│   ├── defect_log.csv
│   ├── exploratory_sessions.csv
│   ├── Test_Plan.md
│   ├── Test_Summary_Template.md
│   ├── Bug_Report_Guide.md
│   └── Recruiter_Review_Checklist.md
├── api-testing/
│   ├── Ecommerce_API.postman_collection.json
│   ├── DummyJSON.postman_environment.json
│   └── README.md
├── database-testing/
│   ├── schema.sql
│   ├── seed.sql
│   ├── validation_queries.sql
│   └── README.md
├── automation/
│   ├── pages/
│   ├── tests/
│   ├── test-data/
│   └── utils/
├── .github/workflows/playwright.yml
├── package.json
├── playwright.config.ts
├── .env.example
└── PROJECT_STATUS.md
```

## Quick Start — UI Automation
```bash
npm install
npx playwright install
npm test
```

Useful commands:
```bash
npm run test:chromium
npm run test:smoke
npm run test:headed
npm run report
```

Environment variables can override defaults:
```bash
SAUCE_BASE_URL=https://www.saucedemo.com/
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD=secret_sauce
```

## API Testing
Import these into Postman:
1. `api-testing/Ecommerce_API.postman_collection.json`
2. `api-testing/DummyJSON.postman_environment.json`

Or run with Newman after installing it:
```bash
newman run api-testing/Ecommerce_API.postman_collection.json   -e api-testing/DummyJSON.postman_environment.json
```

## Database Testing
The SQL files use a representative PostgreSQL e-commerce schema. The database is intentionally local/sample data; it is not presented as DummyJSON's internal database.

```bash
psql -d ecommerce_qa -f database-testing/schema.sql
psql -d ecommerce_qa -f database-testing/seed.sql
psql -d ecommerce_qa -f database-testing/validation_queries.sql
```

## Important Portfolio Integrity Note
This repository ships with authored tests in **Not Run** state and hypothetical defect templates. Execute the suite yourself before publishing results. Never present template defects or placeholder metrics as findings from a live system.

## CV Project Description
**End-to-End E-Commerce Quality Assurance Project** — Designed 130 test cases and an RTM across authentication, catalog, cart, checkout, API, and database workflows; created Postman API assertions and PostgreSQL validation queries; automated critical UI journeys with Playwright/TypeScript using Page Object Model and cross-browser CI through GitHub Actions.
