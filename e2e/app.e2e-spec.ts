import { XhpwnPage } from './app.po';

describe('xhpwn App', function() {
  let page: XhpwnPage;

  beforeEach(() => {
    page = new XhpwnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
