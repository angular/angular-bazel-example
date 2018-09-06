import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo() {
    await browser.get('/');
    return browser.waitForAngular();
  }

  async getParagraphText() {
    return element(by.css('div')).getText();
  }

  typeInInput(s: string) {
    element(by.css('input')).sendKeys(s);
  }
}
