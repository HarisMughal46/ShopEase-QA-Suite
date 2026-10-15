# Manual Test Cases

| ID | Title | Preconditions | Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-01 | Login with valid credentials | On login page | 1. Enter `standard_user` 2. Enter `secret_sauce` 3. Click Login | Redirected to `/inventory.html`, "Products" title shown | High |
| TC-02 | Login with locked-out user | On login page | 1. Enter `locked_out_user` / `secret_sauce` 2. Click Login | Error "Sorry, this user has been locked out."; stays on login | High |
| TC-03 | Login with invalid credentials | On login page | 1. Enter `not_a_user` / `wrong_password` 2. Click Login | Error "Username and password do not match any user in this service" | High |
| TC-04 | Login with empty fields | On login page | 1. Leave both fields empty 2. Click Login | Error "Username is required" | Medium |
| TC-05 | Login with empty password | On login page | 1. Enter `standard_user` only 2. Click Login | Error "Password is required" | Medium |
| TC-06 | Sort products price low→high | Logged in | 1. Select "Price (low to high)" | Prices displayed in ascending order | Medium |
| TC-07 | Sort products name Z→A | Logged in | 1. Select "Name (Z to A)" | Names displayed in descending alphabetical order | Medium |
| TC-08 | Add item to cart | Logged in | 1. Click "Add to cart" on Backpack 2. Open cart | Backpack listed in cart | High |
| TC-09 | Remove item from inventory page | Backpack in cart | 1. Click "Remove" on Backpack | Button reverts to "Add to cart"; badge disappears | High |
| TC-10 | Cart badge count | Logged in, empty cart | 1. Add 3 items 2. Remove 1 | Badge shows 3, then 2 | Medium |
| TC-11 | Full checkout happy path | 2 items in cart | 1. Cart → Checkout 2. Fill first/last/zip 3. Continue 4. Verify totals 5. Finish | Subtotal = sum of items; Total = Subtotal + Tax; "Thank you for your order!" | High |
| TC-12 | Checkout – first name required | On checkout step one | 1. Leave First Name empty, fill others 2. Continue | Error "First Name is required" | Medium |
| TC-13 | Checkout – last name required | On checkout step one | 1. Leave Last Name empty, fill others 2. Continue | Error "Last Name is required" | Medium |
| TC-14 | Checkout – postal code required | On checkout step one | 1. Leave Postal Code empty, fill others 2. Continue | Error "Postal Code is required" | Medium |
| TC-15 | Logout & session protection | Logged in | 1. Menu → Logout 2. Navigate to `/inventory.html` | Login page shown; error "You can only access '/inventory.html' when you are logged in" | High |
| TC-16 | Product images match products (problem_user) | Logged in as `problem_user` | 1. Observe inventory images | Each product shows its own image | Low (exploratory) |
