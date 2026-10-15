# ShopEase QA Suite

![Playwright](https://img.shields.io/badge/Playwright-1.64-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node-24-339933?logo=node.js&logoColor=white)
![Tests](https://img.shields.io/badge/tests-15%20passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

End-to-end and manual QA portfolio project for the public demo store **[Sauce Demo](https://www.saucedemo.com)**. It covers both the automation side (Playwright Test, TypeScript, Page Object Model, CI) and the manual QA side (test plan, test cases, bug reports, traceability).

## What's covered
| Area | Tests |
|---|---|
| Login: valid, locked out, invalid, empty fields | 5 |
| Inventory sorting: price low→high, name Z→A | 2 |
| Cart: add, remove, badge count | 3 |
| Checkout: happy path with total check, form validation | 4 |
| Logout and session protection | 1 |

Tags: `@smoke` is the critical path, `@regression` is everything else.

## Project structure
```
├── .github/workflows/playwright.yml   # CI: runs on push/PR, uploads HTML report
├── data/testData.ts                   # users, error messages, products, customer
├── fixtures/test.ts                   # custom fixtures (page objects + loggedIn)
├── pages/                             # Page Object Model
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/                             # specs
│   ├── login.spec.ts  inventory.spec.ts  cart.spec.ts
│   ├── checkout.spec.ts  logout.spec.ts
├── docs/
│   ├── TEST_PLAN.md  TEST_CASES.md
│   ├── BUG_REPORTS.md  TRACEABILITY.md
├── playwright.config.ts
└── tsconfig.json
```

## Getting started
```bash
npm ci
npx playwright install chromium
npm test              # full suite
npm run test:smoke    # @smoke only
npm run report        # open the HTML report (npx playwright show-report)
npx tsc --noEmit      # type check
```

## Configuration highlights
- `baseURL` set to `https://www.saucedemo.com`, using `data-test` attributes as test IDs
- Chromium only; retries are 2 on CI and 1 locally
- Screenshots, video, and trace are kept on failure; HTML reporter
- Web-first assertions handle waiting, so there are no hard-coded sleeps

## HTML report and screenshots
After a run, use `npm run report` to open `playwright-report/index.html`. To add a screenshot to this README:
1. Run `npm test`, then `npm run report`.
2. Take a screenshot of the report summary and save it as `docs/images/report.png`.
3. Add `![Report](docs/images/report.png)` here.

On CI the report is uploaded as the **playwright-report** artifact for each workflow run.

## Bugs found
Five defects were reproduced with `problem_user`: wrong images, sorting that doesn't work, items that can't be added to the cart, a last-name field that writes into first name, and links that open the wrong product. See [docs/BUG_REPORTS.md](docs/BUG_REPORTS.md).

## License
MIT © 2026 Haris Mughal
