import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should go to homepage', () => {
    page.navigateTo('/home');
    expect(page.getTitleText()).toEqual('Agile Store');
  });

  it('should login as vendor', () => {
    page.navigateTo('/auth/sign-in');
    const username = page.getElementById('username');
    username.sendKeys('kabir');
    const password = page.getElementById('password');
    password.sendKeys('hk141075');
    const loginButton = page.getElementById('login-button');
    loginButton.click().then();
    browser.waitForAngular().then(() => {
      browser.driver.sleep(500);
      expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/vendor-profile');
    });
  });

  afterEach(async () => {
  });
});
