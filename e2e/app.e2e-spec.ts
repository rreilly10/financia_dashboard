import { FinancDashPage } from './app.po';

describe('financ-dash App', function() {
  let page: FinancDashPage;

  beforeEach(() => {
    page = new FinancDashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
