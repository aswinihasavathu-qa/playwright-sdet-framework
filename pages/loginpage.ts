import { Page } from '@playwright/test';

export class LoginPage {

constructor(private page: Page){}

username = this.page.locator('input[name="username"]')
password = this.page.locator('input[name="password"]')
loginBtn = this.page.locator('button[type="submit"]')

async login(user:string, pass:string){
await this.username.fill(user)
await this.password.fill(pass)
await this.loginBtn.click()
}

}