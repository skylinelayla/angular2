import { Anguar2redditPage } from './app.po';

describe('anguar2reddit App', function() {
  let page: Anguar2redditPage;

  beforeEach(() => {
    page = new Anguar2redditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
