const { test, expect } = require('@playwright/test');
import data from '../bank/testdata.json'

test.beforeEach('login', async ({ page })=>{
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.getByRole('link', { name: 'Sign In' }).click()
    await page.locator('#email').fill(data.email)
    await page.locator('#pass').fill(data.password)
    await page.locator('#send2').click()
})

test('User mengisi alamat', async ({ page })=>{
    await page.goto('https://magento.softwaretestingboard.com/customer/account/')
    await page.getByRole('link', { name: 'Address Book' }).click()
    await page.getByText(' Change Billing Address').click()
    await page.locator('#company').clear()
    await page.locator('#company').fill(data.company)
    await page.locator('#telephone').fill(data.tlpn)
    await page.locator('#street_1').fill(data.street1)
    await page.locator('#street_2').fill(data.street2)
    await page.locator('#street_3').fill(data.street3)
    await page.locator('#city').fill(data.city)

    // await page.locator('#region_id').selectOption(data.region)

    await page.locator('#zip').fill(data.zip)
    await page.locator('#country').selectOption(data.country)
    await page.locator('[data-action="save-address"]').click()
    await expect(page.getByText('You saved the address.')).toBeVisible()
    // await page.pause()
})