# Bug Reports

Found during exploratory testing with `problem_user` / `secret_sauce` on https://www.saucedemo.com (Chromium 156, Windows 11, 2026-10-16). All bugs below were reproduced with an automated Playwright probe before being logged. `standard_user` behaves correctly in every case, which isolates the defects to the account's state.

---
## BUG-001 – All product images show the same wrong placeholder image
- **Severity:** Major · **Priority:** Medium · **Status:** Open
- **Steps:** 1. Log in as `problem_user`. 2. View the inventory page.
- **Expected:** Each product shows its own product photo.
- **Actual:** All 6 products show the same image (`/assets/sl-404-*.jpg`, a dog picture). Verified: every `<img src>` on the page is identical.
- **Impact:** Users can't identify products visually; damages trust.

## BUG-002 – Product sort dropdown has no effect
- **Severity:** Major · **Priority:** High · **Status:** Open
- **Steps:** 1. Log in as `problem_user`. 2. Select "Name (Z to A)" from the sort dropdown.
- **Expected:** Products re-ordered Z→A ("Test.allTheThings() T-Shirt (Red)" first).
- **Actual:** List stays in A→Z order (Backpack first). Order before and after sorting is identical.
- **Impact:** Sorting feature is unusable.

## BUG-003 – "Add to cart" does nothing for some products
- **Severity:** Critical · **Priority:** High · **Status:** Open
- **Steps:** 1. Log in as `problem_user`. 2. Click "Add to cart" on Backpack, Bike Light, Bolt T-Shirt and Fleece Jacket.
- **Expected:** Cart badge shows 4; all four buttons change to "Remove".
- **Actual:** Badge shows **2**; only Backpack and Bike Light change to "Remove". Bolt T-Shirt and Fleece Jacket can't be added.
- **Impact:** Lost sales — some products can't be purchased.

## BUG-004 – Typing in "Last Name" overwrites "First Name"; checkout blocked
- **Severity:** Critical · **Priority:** High · **Status:** Open
- **Steps:** 1. Log in as `problem_user`, add an item, go to Checkout. 2. Type "Haris" in First Name, "Mughal" in Last Name, "54000" in Postal Code. 3. Click Continue.
- **Expected:** Proceeds to Checkout: Overview.
- **Actual:** First Name field contains "Mughal", Last Name stays empty, error "Error: Last Name is required" is shown; the user can't finish checkout.
- **Impact:** Checkout funnel completely blocked.

## BUG-005 – Product title link opens the wrong product
- **Severity:** Major · **Priority:** Medium · **Status:** Open
- **Steps:** 1. Log in as `problem_user`. 2. Click the title link of item id 4 (Sauce Labs Backpack).
- **Expected:** Opens `inventory-item.html?id=4` showing Sauce Labs Backpack.
- **Actual:** Opens `inventory-item.html?id=5` showing **Sauce Labs Fleece Jacket**.
