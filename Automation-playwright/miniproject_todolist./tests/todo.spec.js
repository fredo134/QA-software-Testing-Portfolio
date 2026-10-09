import { test, expect } from '@playwright/test';

test('test_todolist', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');

  const todoInput = page.getByTestId('text-input');

  // Add items
  const items = ['buy shoe', 'go for walk', 'rest', 'go to school'];
  for (const item of items) {
    await todoInput.fill(item);
    await todoInput.press('Enter');
  }

  // Complete specific items
  await page.getByRole('listitem').filter({ hasText: 'buy shoe' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'rest' }).getByTestId('todo-item-toggle').check();

  // Filter views and assert expected item counts
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByTestId('todo-item')).toHaveCount(2);

  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByTestId('todo-item')).toHaveCount(5);

  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByTestId('todo-item-label')).toHaveText(['go for walk', 'go to school']);

  // Clear completed items and return to All view
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();

  // Verify remaining items in All view
  await expect(page.getByTestId('todo-item-label')).toHaveText(['go for walk', 'go to school']);
});