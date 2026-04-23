import { test, expect } from '@playwright/test';

test('should add headphones to cart', async ({ page }) => {
  // 1. Открываем сайт [Open the site]
  await page.goto('http://localhost:5173/');

  // 2. Кликаем по товару (Playwright сам нашел этот текст) 
  // [Click the product (Playwright found this text itself)]
  await page.locator('div').filter({ hasText: 'Acoustic Noise Cancelling' }).nth(2).click();

  // 3. Добавляем в корзину (Найди кнопку "Add to Cart" на странице товара)
  // [Add to cart (Find the "Add to Cart" button on the product page)]
  const addToCart = page.getByRole('button', { name: /add to cart/i });
  await addToCart.click();

  // 4. Проверяем переход в корзину [Check navigation to cart]
  await page.getByRole('link', { name: /cart/i }).click();
  await expect(page).toHaveURL(/.*cart/);
});