import { test, expect } from '../fixtures/test';
import { users, errors } from '../data/testData';

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => loginPage.goto());

  test('TC-01 valid user can log in @smoke', async ({ loginPage, inventoryPage }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.expectLoaded();
  });

  test('TC-02 locked out user sees error @regression', async ({ loginPage, page }) => {
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);
    await loginPage.expectError(errors.lockedOut);
    await expect(page).not.toHaveURL(/inventory/);
  });

  test('TC-03 invalid credentials are rejected @regression', async ({ loginPage }) => {
    await loginPage.login(users.invalid.username, users.invalid.password);
    await loginPage.expectError(errors.invalid);
  });

  test('TC-04 empty username shows required error @regression', async ({ loginPage }) => {
    await loginPage.login('', '');
    await loginPage.expectError(errors.usernameRequired);
  });

  test('TC-05 empty password shows required error @regression', async ({ loginPage }) => {
    await loginPage.login(users.standard.username, '');
    await loginPage.expectError(errors.passwordRequired);
  });
});
