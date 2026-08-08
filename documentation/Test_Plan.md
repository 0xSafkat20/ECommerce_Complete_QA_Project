# Test Plan — E-Commerce Complete QA Project

## Objective
Demonstrate an end-to-end QA workflow suitable for a QA Intern/Junior QA portfolio through manual testing, API testing, database validation, browser automation, defect management, traceability, and CI.

## Systems Under Test
- **UI:** SauceDemo (`https://www.saucedemo.com/`)
- **API:** DummyJSON Products and Carts (`https://dummyjson.com/docs`)
- **Database:** Local representative PostgreSQL schema included in `database-testing/`

## Scope
Authentication, product catalog, sorting, cart, checkout, navigation/usability, product APIs, cart APIs, and relational data validation.

## Out of Scope
Real payment processing, production penetration testing, destructive security testing, and production-scale performance/load testing.

## Test Types
Smoke, functional, negative, boundary, regression, exploratory, compatibility, API, database, and automated end-to-end testing.

## Entry Criteria
1. Target sites are reachable.
2. Playwright dependencies/browsers are installed.
3. Postman/Newman is available for API execution.
4. Sample PostgreSQL schema is loaded for database validation.

## Exit Criteria
1. Critical smoke journey executed on supported browsers.
2. Authored manual cases updated from `Not Run` to real statuses.
3. Failed cases have reproducible defects or explanatory notes.
4. API collection has been executed and report exported.
5. SQL validation queries have been executed against the sample schema.
6. Open critical/major risks are summarized.

## Defect Policy
Do not claim template bugs as real defects. Convert `BUG-TPL-*` into real defect IDs only after reproduction and evidence collection.

## Deliverables
- 35 requirements
- 80 test scenarios
- 130 detailed test cases
- RTM
- Defect log/template
- 8 exploratory charters
- Postman collection/environment
- 25+ SQL validation queries
- Playwright TypeScript framework with 20+ automated tests
- GitHub Actions CI workflow
- Test summary template
