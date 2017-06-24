import { browser, by, element } from 'protractor';

export class NgupFormsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('up-root h1')).getText();
  }
}
