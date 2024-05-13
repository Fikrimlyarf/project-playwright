// @ts-check
const { test, expect } = require('@playwright/test');
import data from '../bank/testdata.json'

test.beforeEach('login', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
    await page.getByRole('link', { name: 'Sign In' }).click()
    await page.locator('#email').fill(data.email)
    await page.locator('#pass').fill(data.password)
    await page.locator('#send2').click()
});
