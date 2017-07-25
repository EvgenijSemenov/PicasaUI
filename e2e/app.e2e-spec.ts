import { PicasaUIPage } from './app.po';

describe('picasa-ui App', function() {
  let page: PicasaUIPage;

  beforeEach(() => {
    page = new PicasaUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
