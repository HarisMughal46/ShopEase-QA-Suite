# Test Plan – ShopEase (Sauce Demo)

## 1. Scope
**In scope:** login/authentication, product inventory and sorting, cart (add/remove, badge), checkout (customer info, overview totals, completion), logout/session protection.
**Out of scope:** payment processing (not implemented by the demo), performance/load, security penetration, accessibility audit, mobile native apps.

## 2. Approach
- **Manual testing:** scripted test cases (see `TEST_CASES.md`) plus exploratory sessions with `problem_user` to find defects (see `BUG_REPORTS.md`).
- **Automation:** Playwright Test + TypeScript using the Page Object Model; tests tagged `@smoke` (critical path, every commit) and `@regression` (full suite).
- **Techniques:** equivalence partitioning (valid/invalid/locked users), boundary checks on required fields, state-transition testing for cart badge, end-to-end user journeys.

## 3. Environments
| Item | Value |
|---|---|
| Application | https://www.saucedemo.com (public demo) |
| Browser | Chromium (Playwright Desktop Chrome profile) |
| OS | Windows 11 (local), Ubuntu latest (GitHub Actions CI) |
| Node | v24 |
| Test accounts | `standard_user`, `locked_out_user`, `problem_user` / `secret_sauce` |

## 4. Entry criteria
- Application URL reachable; test accounts available.
- Test cases reviewed; automation suite compiles (`npx tsc --noEmit`).

## 5. Exit criteria
- 100% of High-priority test cases executed; 100% of smoke tests passing.
- No open Critical defects on `standard_user` flows; all defects logged with repro steps.
- HTML report archived (CI artifact).

## 6. Risks & mitigations
| Risk | Mitigation |
|---|---|
| External public site may be slow or down | Retries on CI, generous timeouts, web-first auto-waiting assertions (no fixed sleeps) |
| Site markup changes break locators | Stable `data-test` attributes via `testIdAttribute`; POM centralises locators |
| No control over test data/backend | Each test logs in fresh; cart state is per-session (localStorage), tests are independent |
| Parallel runs hitting a shared site | Limited worker count in CI |

## 7. Deliverables
Test plan, test cases, bug reports, traceability matrix, automated suite, HTML report.
