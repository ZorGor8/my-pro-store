# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: src/tests/cart.spec.ts >> should add headphones to cart
- Location: src/tests/cart.spec.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /add to cart/i })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - generic [ref=e6]:
      - heading "Корзина (Cart)" [level=2] [ref=e7]
      - button "×" [ref=e8]
    - generic [ref=e10]:
      - generic [ref=e11]: 🛒
      - paragraph [ref=e12]: Тут пока пусто... (It's empty here...)
    - generic [ref=e13]:
      - generic [ref=e14]:
        - generic [ref=e15]: "Общая сумма: (Total amount:)"
        - generic [ref=e16]: $0.00
      - button "Оформить заказ (Checkout)" [disabled] [ref=e17]
      - button "Продолжить покупки (Continue shopping)" [ref=e18]
  - banner [ref=e19]:
    - generic [ref=e20]:
      - generic [ref=e21] [cursor=pointer]:
        - img [ref=e23]
        - heading "PREMIUMSTORE" [level=1] [ref=e27]
      - generic [ref=e28] [cursor=pointer]: 🛒
    - generic [ref=e29]:
      - textbox "Search products..." [ref=e30]
      - generic [ref=e31]: 🔍
    - navigation [ref=e32]:
      - button "Все товары" [ref=e33]
      - button "electronics" [ref=e34]
      - button "jewelery" [ref=e35]
      - button "men's clothing" [ref=e36]
      - button "women's clothing" [ref=e37]
  - main [ref=e38]:
    - generic [ref=e40]:
      - generic [ref=e41]:
        - link "Acoustic Noise Cancelling Headphones Acoustic Noise Cancelling Headphones Premium comfort and legendary noise cancellation." [ref=e42] [cursor=pointer]:
          - /url: /product/1
          - img "Acoustic Noise Cancelling Headphones" [ref=e44]
          - heading "Acoustic Noise Cancelling Headphones" [level=3] [ref=e45]
          - paragraph [ref=e46]: Premium comfort and legendary noise cancellation.
        - generic [ref=e47]:
          - generic [ref=e48]: $109.95
          - button [ref=e49]:
            - img [ref=e50]
      - generic [ref=e54]:
        - link "Stainless Steel Smart Watch Stainless Steel Smart Watch Keep track of your fitness, health, and notifications." [ref=e55] [cursor=pointer]:
          - /url: /product/2
          - img "Stainless Steel Smart Watch" [ref=e57]
          - heading "Stainless Steel Smart Watch" [level=3] [ref=e58]
          - paragraph [ref=e59]: Keep track of your fitness, health, and notifications.
        - generic [ref=e60]:
          - generic [ref=e61]: $250
          - button [ref=e62]:
            - img [ref=e63]
      - generic [ref=e67]:
        - link "Ergonomic Office Keyboard Ergonomic Office Keyboard A comfortable typing experience for long workdays." [ref=e68] [cursor=pointer]:
          - /url: /product/3
          - img "Ergonomic Office Keyboard" [ref=e70]
          - heading "Ergonomic Office Keyboard" [level=3] [ref=e71]
          - paragraph [ref=e72]: A comfortable typing experience for long workdays.
        - generic [ref=e73]:
          - generic [ref=e74]: $55.99
          - button [ref=e75]:
            - img [ref=e76]
      - generic [ref=e80]:
        - link "Pro Gaming Laptop Pro Gaming Laptop A powerful machine designed for high-end performance." [ref=e81] [cursor=pointer]:
          - /url: /product/4
          - img "Pro Gaming Laptop" [ref=e83]
          - heading "Pro Gaming Laptop" [level=3] [ref=e84]
          - paragraph [ref=e85]: A powerful machine designed for high-end performance.
        - generic [ref=e86]:
          - generic [ref=e87]: $120
          - button [ref=e88]:
            - img [ref=e89]
      - generic [ref=e93]:
        - link "Sleek Ultra-Slim Laptop Sleek Ultra-Slim Laptop Fast, light, and versatile for productivity on the go." [ref=e94] [cursor=pointer]:
          - /url: /product/5
          - img "Sleek Ultra-Slim Laptop" [ref=e96]
          - heading "Sleek Ultra-Slim Laptop" [level=3] [ref=e97]
          - paragraph [ref=e98]: Fast, light, and versatile for productivity on the go.
        - generic [ref=e99]:
          - generic [ref=e100]: $299.99
          - button [ref=e101]:
            - img [ref=e102]
      - generic [ref=e106]:
        - link "Minimalist Gold Heart Ring Minimalist Gold Heart Ring A small and delicate symbol of modern love." [ref=e107] [cursor=pointer]:
          - /url: /product/6
          - img "Minimalist Gold Heart Ring" [ref=e109]
          - heading "Minimalist Gold Heart Ring" [level=3] [ref=e110]
          - paragraph [ref=e111]: A small and delicate symbol of modern love.
        - generic [ref=e112]:
          - generic [ref=e113]: $150
          - button [ref=e114]:
            - img [ref=e115]
      - generic [ref=e119]:
        - link "Elegant Pearl Drops Earrings Elegant Pearl Drops Earrings Classic and graceful earrings with an open twist design." [ref=e120] [cursor=pointer]:
          - /url: /product/7
          - img "Elegant Pearl Drops Earrings" [ref=e122]
          - heading "Elegant Pearl Drops Earrings" [level=3] [ref=e123]
          - paragraph [ref=e124]: Classic and graceful earrings with an open twist design.
        - generic [ref=e125]:
          - generic [ref=e126]: $199.99
          - button [ref=e127]:
            - img [ref=e128]
      - generic [ref=e132]:
        - link "Minimalist Silver Cuff Bracelet Minimalist Silver Cuff Bracelet A simple and stylish bracelet made of sterling silver." [ref=e133] [cursor=pointer]:
          - /url: /product/8
          - img "Minimalist Silver Cuff Bracelet" [ref=e135]
          - heading "Minimalist Silver Cuff Bracelet" [level=3] [ref=e136]
          - paragraph [ref=e137]: A simple and stylish bracelet made of sterling silver.
        - generic [ref=e138]:
          - generic [ref=e139]: $75
          - button [ref=e140]:
            - img [ref=e141]
      - generic [ref=e145]:
        - link "Aesthetic Floral Stud Earrings Aesthetic Floral Stud Earrings Handcrafted minimalist floral-inspired earrings." [ref=e146] [cursor=pointer]:
          - /url: /product/9
          - img "Aesthetic Floral Stud Earrings" [ref=e148]
          - heading "Aesthetic Floral Stud Earrings" [level=3] [ref=e149]
          - paragraph [ref=e150]: Handcrafted minimalist floral-inspired earrings.
        - generic [ref=e151]:
          - generic [ref=e152]: $38
          - button [ref=e153]:
            - img [ref=e154]
      - generic [ref=e158]:
        - link "Minimalist Link Chain Bracelet Minimalist Link Chain Bracelet A timeless design of interlocking gold-plated links." [ref=e159] [cursor=pointer]:
          - /url: /product/10
          - img "Minimalist Link Chain Bracelet" [ref=e161]
          - heading "Minimalist Link Chain Bracelet" [level=3] [ref=e162]
          - paragraph [ref=e163]: A timeless design of interlocking gold-plated links.
        - generic [ref=e164]:
          - generic [ref=e165]: $110
          - button [ref=e166]:
            - img [ref=e167]
      - generic [ref=e171]:
        - link "Fjallraven - Kanken Daily Backpack Fjallraven - Kanken Daily Backpack Functional and durable, with ergonomic shoulder straps." [ref=e172] [cursor=pointer]:
          - /url: /product/11
          - img "Fjallraven - Kanken Daily Backpack" [ref=e174]
          - heading "Fjallraven - Kanken Daily Backpack" [level=3] [ref=e175]
          - paragraph [ref=e176]: Functional and durable, with ergonomic shoulder straps.
        - generic [ref=e177]:
          - generic [ref=e178]: $109.95
          - button [ref=e179]:
            - img [ref=e180]
      - generic [ref=e184]:
        - link "Classic Mens Denim Trucker Jacket Classic Mens Denim Trucker Jacket A must-have piece for every men's casual wardrobe." [ref=e185] [cursor=pointer]:
          - /url: /product/12
          - img "Classic Mens Denim Trucker Jacket" [ref=e187]
          - heading "Classic Mens Denim Trucker Jacket" [level=3] [ref=e188]
          - paragraph [ref=e189]: A must-have piece for every men's casual wardrobe.
        - generic [ref=e190]:
          - generic [ref=e191]: $40
          - button [ref=e192]:
            - img [ref=e193]
      - generic [ref=e197]:
        - link "Simple Plain Black T-Shirt Simple Plain Black T-Shirt A comfortable and essential basic for everyday wear." [ref=e198] [cursor=pointer]:
          - /url: /product/13
          - img "Simple Plain Black T-Shirt" [ref=e200]
          - heading "Simple Plain Black T-Shirt" [level=3] [ref=e201]
          - paragraph [ref=e202]: A comfortable and essential basic for everyday wear.
        - generic [ref=e203]:
          - generic [ref=e204]: $22.3
          - button [ref=e205]:
            - img [ref=e206]
      - generic [ref=e210]:
        - link "Relaxed Fit Urban Hoodie Relaxed Fit Urban Hoodie Soft fleece inside, with functional front pockets." [ref=e211] [cursor=pointer]:
          - /url: /product/14
          - img "Relaxed Fit Urban Hoodie" [ref=e213]
          - heading "Relaxed Fit Urban Hoodie" [level=3] [ref=e214]
          - paragraph [ref=e215]: Soft fleece inside, with functional front pockets.
        - generic [ref=e216]:
          - generic [ref=e217]: $35.5
          - button [ref=e218]:
            - img [ref=e219]
      - generic [ref=e223]:
        - link "Padded Urban Backpack Padded Urban Backpack Large compartment for laptop, plus external mesh pockets." [ref=e224] [cursor=pointer]:
          - /url: /product/15
          - img "Padded Urban Backpack" [ref=e226]
          - heading "Padded Urban Backpack" [level=3] [ref=e227]
          - paragraph [ref=e228]: Large compartment for laptop, plus external mesh pockets.
        - generic [ref=e229]:
          - generic [ref=e230]: $110
          - button [ref=e231]:
            - img [ref=e232]
      - generic [ref=e236]:
        - link "Classic All-White Sneakers Classic All-White Sneakers Low-profile design that complements any casual look." [ref=e237] [cursor=pointer]:
          - /url: /product/16
          - img "Classic All-White Sneakers" [ref=e239]
          - heading "Classic All-White Sneakers" [level=3] [ref=e240]
          - paragraph [ref=e241]: Low-profile design that complements any casual look.
        - generic [ref=e242]:
          - generic [ref=e243]: $45
          - button [ref=e244]:
            - img [ref=e245]
      - generic [ref=e249]:
        - link "Bold Red Evening Cocktail Dress Bold Red Evening Cocktail Dress An elegant and eye-catching dress for special events." [ref=e250] [cursor=pointer]:
          - /url: /product/17
          - img "Bold Red Evening Cocktail Dress" [ref=e252]
          - heading "Bold Red Evening Cocktail Dress" [level=3] [ref=e253]
          - paragraph [ref=e254]: An elegant and eye-catching dress for special events.
        - generic [ref=e255]:
          - generic [ref=e256]: $85.99
          - button [ref=e257]:
            - img [ref=e258]
      - generic [ref=e262]:
        - link "Structured Designer Leather Handbag Structured Designer Leather Handbag Premium leather, with silver-toned hardware and a spacious interior." [ref=e263] [cursor=pointer]:
          - /url: /product/18
          - img "Structured Designer Leather Handbag" [ref=e265]
          - heading "Structured Designer Leather Handbag" [level=3] [ref=e266]
          - paragraph [ref=e267]: Premium leather, with silver-toned hardware and a spacious interior.
        - generic [ref=e268]:
          - generic [ref=e269]: $250
          - button [ref=e270]:
            - img [ref=e271]
      - generic [ref=e275]:
        - link "Quilted Crossbody Bag Quilted Crossbody Bag The epitome of fashion and practical elegance." [ref=e276] [cursor=pointer]:
          - /url: /product/19
          - img "Quilted Crossbody Bag" [ref=e278]
          - heading "Quilted Crossbody Bag" [level=3] [ref=e279]
          - paragraph [ref=e280]: The epitome of fashion and practical elegance.
        - generic [ref=e281]:
          - generic [ref=e282]: $999
          - button [ref=e283]:
            - img [ref=e284]
      - generic [ref=e288]:
        - link "Cozy Cable Knit Pullover Sweater Cozy Cable Knit Pullover Sweater Ultra-soft wool-blend yarn, perfect for cold weather." [ref=e289] [cursor=pointer]:
          - /url: /product/20
          - img "Cozy Cable Knit Pullover Sweater" [ref=e291]
          - heading "Cozy Cable Knit Pullover Sweater" [level=3] [ref=e292]
          - paragraph [ref=e293]: Ultra-soft wool-blend yarn, perfect for cold weather.
        - generic [ref=e294]:
          - generic [ref=e295]: $110
          - button [ref=e296]:
            - img [ref=e297]
  - contentinfo [ref=e301]:
    - generic [ref=e302]:
      - generic [ref=e303]:
        - generic [ref=e304]: PREMIUMSTORE
        - paragraph [ref=e305]: Лучшие товары для тех, кто ценит качество и стиль. (Only the best for those who value style.)
      - generic [ref=e306]:
        - heading "Shop" [level=4] [ref=e307]
        - list [ref=e308]:
          - listitem [ref=e309]:
            - link "All Products" [ref=e310] [cursor=pointer]:
              - /url: /
          - listitem [ref=e311]:
            - link "Featured" [ref=e312] [cursor=pointer]:
              - /url: /featured
          - listitem [ref=e313]:
            - link "New Arrivals" [ref=e314] [cursor=pointer]:
              - /url: /new-arrivals
      - generic [ref=e315]:
        - heading "Company" [level=4] [ref=e316]
        - list [ref=e317]:
          - listitem [ref=e318]:
            - link "About Us" [ref=e319] [cursor=pointer]:
              - /url: /about
          - listitem [ref=e320]:
            - link "Careers" [ref=e321] [cursor=pointer]:
              - /url: /careers
          - listitem [ref=e322]:
            - link "Contact" [ref=e323] [cursor=pointer]:
              - /url: /contact
          - listitem [ref=e324]:
            - link "Shipping Policy" [ref=e325] [cursor=pointer]:
              - /url: /shipping
      - generic [ref=e326]:
        - heading "Follow Us" [level=4] [ref=e327]
        - generic [ref=e328]:
          - link [ref=e329] [cursor=pointer]:
            - /url: https://github.com/ZorGor8
            - img [ref=e330]
          - link [ref=e333] [cursor=pointer]:
            - /url: https://twitter.com
            - img [ref=e334]
          - link [ref=e336] [cursor=pointer]:
            - /url: https://instagram.com
            - img [ref=e337]
    - generic [ref=e340]: © 2026 Premium Store. Built with passion.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('should add headphones to cart', async ({ page }) => {
  4  |   // 1. Открываем сайт [Open the site]
  5  |   await page.goto('http://localhost:5173/');
  6  | 
  7  |   // 2. Кликаем по товару (Playwright сам нашел этот текст) 
  8  |   // [Click the product (Playwright found this text itself)]
  9  |   await page.locator('div').filter({ hasText: 'Acoustic Noise Cancelling' }).nth(2).click();
  10 | 
  11 |   // 3. Добавляем в корзину (Найди кнопку "Add to Cart" на странице товара)
  12 |   // [Add to cart (Find the "Add to Cart" button on the product page)]
  13 |   const addToCart = page.getByRole('button', { name: /add to cart/i });
> 14 |   await addToCart.click();
     |                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  15 | 
  16 |   // 4. Проверяем переход в корзину [Check navigation to cart]
  17 |   await page.getByRole('link', { name: /cart/i }).click();
  18 |   await expect(page).toHaveURL(/.*cart/);
  19 | });
```