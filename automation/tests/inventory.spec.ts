import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { login } from '../utils/auth';

test.beforeEach(async ({ page }) => { await login(page); });
test.describe('Inventory', () => {
  test('inventory loads @smoke', async ({ page }) => { await new InventoryPage(page).expectLoaded(); });
  test('each visible item has name and price', async ({ page }) => { const i=new InventoryPage(page); const count=await i.items.count(); expect(count).toBeGreaterThan(0); for(let n=0;n<count;n++){ await expect(i.items.nth(n).locator('.inventory_item_name')).toBeVisible(); await expect(i.items.nth(n).locator('.inventory_item_price')).toContainText('$'); } });
  test('sort name A-Z', async ({ page }) => { const i=new InventoryPage(page); await i.sort.selectOption('az'); const names=await i.names(); expect(names).toEqual([...names].sort((a,b)=>a.localeCompare(b))); });
  test('sort name Z-A', async ({ page }) => { const i=new InventoryPage(page); await i.sort.selectOption('za'); const names=await i.names(); expect(names).toEqual([...names].sort((a,b)=>b.localeCompare(a))); });
  test('sort price low-high', async ({ page }) => { const i=new InventoryPage(page); await i.sort.selectOption('lohi'); const p=await i.prices(); expect(p).toEqual([...p].sort((a,b)=>a-b)); });
  test('sort price high-low', async ({ page }) => { const i=new InventoryPage(page); await i.sort.selectOption('hilo'); const p=await i.prices(); expect(p).toEqual([...p].sort((a,b)=>b-a)); });
});
