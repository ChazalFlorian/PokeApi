import { PokeAPIPage } from './app.po';

describe('poke-api App', function() {
  let page: PokeAPIPage;

  beforeEach(() => {
    page = new PokeAPIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
