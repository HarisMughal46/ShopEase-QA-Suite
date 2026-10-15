import { test, expect } from '../fixtures/test';

test('TC-15 user can log out and is returned to login @smoke', async ({ loggedIn, loginPage, page }) => {
  await loggedIn.logout();
  await expect(loginPage.loginButton).toBeVisible();
  await page.goto('/inventory.html');
  await expect(loginPage.error).toContainText("You can only access '/inventory.html' when you are logged in");
});
