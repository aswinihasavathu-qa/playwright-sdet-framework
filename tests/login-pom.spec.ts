import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { ENV } from '../config/env'

test('Login Test Using POM', async ({ page }) => {

    const login = new LoginPage(page)

    await page.goto(ENV.baseURL)

    await login.login(ENV.username, ENV.password)

    await expect(page).toHaveURL(/dashboard/)
})