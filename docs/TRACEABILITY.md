# Traceability Matrix

| Req ID | Requirement | Manual Test Case(s) | Automated Spec | Tag |
|---|---|---|---|---|
| REQ-01 | Registered users can log in | TC-01 | `tests/login.spec.ts` › TC-01 | @smoke |
| REQ-02 | Locked accounts are denied access | TC-02 | `tests/login.spec.ts` › TC-02 | @regression |
| REQ-03 | Invalid credentials are rejected | TC-03 | `tests/login.spec.ts` › TC-03 | @regression |
| REQ-04 | Login fields are mandatory | TC-04, TC-05 | `tests/login.spec.ts` › TC-04, TC-05 | @regression |
| REQ-05 | Products can be sorted by price and name | TC-06, TC-07 | `tests/inventory.spec.ts` › TC-06, TC-07 | @regression |
| REQ-06 | Users can add/remove items to the cart | TC-08, TC-09 | `tests/cart.spec.ts` › TC-08, TC-09 | @smoke / @regression |
| REQ-07 | Cart badge shows current item count | TC-10 | `tests/cart.spec.ts` › TC-10 | @regression |
| REQ-08 | Users can complete a purchase with correct totals | TC-11 | `tests/checkout.spec.ts` › TC-11 | @smoke |
| REQ-09 | Checkout customer info is validated | TC-12, TC-13, TC-14 | `tests/checkout.spec.ts` › TC-12–TC-14 | @regression |
| REQ-10 | Users can log out; protected pages require login | TC-15 | `tests/logout.spec.ts` › TC-15 | @smoke |
| REQ-11 | Product images match products | TC-16 | Manual only (see BUG-001) | — |
