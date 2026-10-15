import { test, expect } from '../fixtures/test';

test.describe('Inventory sorting', () => {
  test('TC-06 sort by price low to high @regression', async ({ loggedIn }) => {
    await loggedIn.sortBy('lohi');
    const prices = await loggedIn.prices();
    expect(prices.length).toBe(6);
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  });

  test('TC-07 sort by name Z to A @regression', async ({ loggedIn }) => {
    await loggedIn.sortBy('za');
    const names = await loggedIn.names();
    expect(names).toEqual([...names].sort((a, b) => b.localeCompare(a)));
  });
});
