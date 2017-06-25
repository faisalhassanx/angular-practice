import { MyCliAppPage } from './app.po';

describe('my-cli-app App', () => {
  let page: MyCliAppPage;

  beforeEach(() => {
    page = new MyCliAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
