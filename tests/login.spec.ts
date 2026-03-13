import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import users from '../test-data/users.json'

users.users.forEach((user, index) => {

test(`Login test ${index + 1} for ${user.username}`, async ({ page }) => {

    const login = new LoginPage(page)

    await page.goto('https://opensource-demo.orangehrmlive.com')

    await login.login(user.username, user.password)

    await expect(page).toHaveURL(/dashboard/)

})

})