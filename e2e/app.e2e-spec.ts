import { NgupFormsPage } from './app.po';

describe('ngup-forms App', () => {
  let page: NgupFormsPage;

  beforeEach(() => {
    page = new NgupFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to up!!');
  });
});
