import { test } from '@playwright/test';

test('should render the button', async ({ page }) => {
  // Navigate to the home page
  await page.goto('http://localhost:5173/'); // Adjust URL as needed

  // Wait for the button to be rendered
  await page.waitForSelector('button');

  // Take a screenshot
  await page.screenshot({ path: `screenshot/ss-${page.viewportSize().width}.png` });

  
});


