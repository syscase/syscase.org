import {rootUrl} from '../tests.js';
import {Selector} from 'testcafe';

const headerLinkDocs = Selector('header')
  .find('a')
  .withExactText('Docs');
const footerLinkDocs = Selector('footer')
  .find('a')
  .withExactText('Docs');

fixture`Home`.page(rootUrl);

test('Header link Docs', async t => {
  await t
    .click(headerLinkDocs)
    .expect(Selector('h1').innerText)
    .contains('Docs');
});

test('Footer link Docs', async t => {
  await t
    .click(footerLinkDocs)
    .expect(Selector('h1').innerText)
    .contains('Docs');
});
