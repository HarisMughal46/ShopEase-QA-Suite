import { test, expect } from '../fixtures/test';
import { products, customer, errors } from '../data/testData';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout', () => {
  test.beforeEach(async ({ loggedIn, cartPage }) => {
    await loggedIn.addToCart(products.backpack);
    await loggedIn.addToCart(products.bikeLight);
    await loggedIn.openCart();
    await cartPage.checkout();
  });

  test('TC-11 full checkout happy path @smoke', async ({ checkoutPage, page }) => {
    await checkoutPage.fillInfo(customer.firstName, customer.lastName, customer.postalCode);
    await expect(page).toHaveURL(/checkout-step-two\.html/);
    const subtotal = CheckoutPage.money(await checkoutPage.subtotal.innerText());
    const tax = CheckoutPage.money(await checkoutPage.tax.innerText());
    const total = CheckoutPage.money(await checkoutPage.total.innerText());
    expect(subtotal).toBeCloseTo(29.99 + 9.99, 2);
    expect(total).toBeCloseTo(subtotal + tax, 2);
    await checkoutPage.finishButton.click();
    await checkoutPage.expectComplete();
  });

  test('TC-12 first name is required @regression', async ({ checkoutPage }) => {
    await checkoutPage.fillInfo('', customer.lastName, customer.postalCode);
    await expect(checkoutPage.error).toHaveText(errors.firstNameRequired);
  });

  test('TC-13 last name is required @regression', async ({ checkoutPage }) => {
    await checkoutPage.fillInfo(customer.firstName, '', customer.postalCode);
    await expect(checkoutPage.error).toHaveText(errors.lastNameRequired);
  });

  test('TC-14 postal code is required @regression', async ({ checkoutPage }) => {
    await checkoutPage.fillInfo(customer.firstName, customer.lastName, '');
    await expect(checkoutPage.error).toHaveText(errors.postalCodeRequired);
  });
});
