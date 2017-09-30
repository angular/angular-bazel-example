const {browser, by, element} = require('protractor');

describe('E2E Tests', () => {
  it('should display: Hello world!', () => {
    browser.get('');
    const div = element(by.css('div'));
    div.getText().then(t => expect(t).toEqual(`Hello World`));
    element(by.css('input')).sendKeys('!');
    div.getText().then(t => expect(t).toEqual(`Hello World!`));
  });
});