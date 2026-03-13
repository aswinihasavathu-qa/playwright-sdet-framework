import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'

test('Login Test Using POM', async ({ page }) => {

const login = new LoginPage(page)

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

await login.login('Admin','admin123')

// wait for dashboard element
await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible()
await expect(page).toHaveURL(/dashboard/)

})