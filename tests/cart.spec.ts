import { test, expect } from '../fixtures/test';
import { products } from '../data/testData';

test.describe('Cart', () => {
  test('TC-08 add item to cart shows it in cart @smoke', async ({ loggedIn, cartPage }) => {
    await loggedIn.addToCart(products.backpack);
    await loggedIn.openCart();
    await cartPage.expectLoaded();
    await expect(cartPage.itemNames).toHaveText([products.backpack]);
  });

  test('TC-09 remove item from inventory page @regression', async ({ loggedIn }) => {
    await loggedIn.addToCart(products.backpack);
    await expect(loggedIn.cartBadge).toHaveText('1');
    await loggedIn.removeFromCart(products.backpack);
    await expect(loggedIn.cartBadge).toBeHidden();
  });

  test('TC-10 cart badge reflects item count @regression', async ({ loggedIn }) => {
    await expect(loggedIn.cartBadge).toBeHidden();
    await loggedIn.addToCart(products.backpack);
    await loggedIn.addToCart(products.bikeLight);
    await loggedIn.addToCart(products.boltShirt);
    await expect(loggedIn.cartBadge).toHaveText('3');
    await loggedIn.removeFromCart(products.bikeLight);
    await expect(loggedIn.cartBadge).toHaveText('2');
  });
});
