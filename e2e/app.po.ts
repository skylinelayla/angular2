import { browser, element, by } from 'protractor';

export class Anguar2redditPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
