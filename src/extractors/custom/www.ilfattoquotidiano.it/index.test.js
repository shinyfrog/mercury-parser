import assert from 'assert';
import URL from 'url';
import cheerio from 'cheerio';

import Mercury from 'mercury';
import getExtractor from 'extractors/get-extractor';
import { excerptContent } from 'utils/text';

const fs = require('fs');

describe('WwwIlfattoquotidianoItExtractor', () => {
  describe('initial test case', () => {
    let result;
    let url;
    beforeAll(() => {
      url =
        'https://www.ilfattoquotidiano.it/2019/04/10/def-giorgetti-flat-tax-finanziata-con-aumenti-iva-si-vedra-nella-manovra-non-si-puo-ancora-dire/5100326/';
      const html = fs.readFileSync(
        './fixtures/www.ilfattoquotidiano.it/1554908132787.html'
      );
      result = Mercury.parse(url, { html, fallback: false });
    });

    it('is selected properly', () => {
      // This test should be passing by default.
      // It sanity checks that the correct parser
      // is being selected for URLs from this domain
      const extractor = getExtractor(url);
      assert.equal(extractor.domain, URL.parse(url).hostname);
    });

    it('returns the title', async () => {
      // To pass this test, fill out the title selector
      // in ./src/extractors/custom/www.ilfattoquotidiano.it/index.js.
      const { title } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        title,
        `Def, Giorgetti: "Flat tax finanziata con aumenti Iva? Si vedrà nella manovra, non si può ancora dire"`
      );
    });

    it('returns the author', async () => {
      // To pass this test, fill out the author selector
      // in ./src/extractors/custom/www.ilfattoquotidiano.it/index.js.
      const { author } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(author, null);
    });

    it('returns the date_published', async () => {
      // To pass this test, fill out the date_published selector
      // in ./src/extractors/custom/www.ilfattoquotidiano.it/index.js.
      const { date_published } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(date_published, `2019-04-10T11:37:26.000Z`);
    });

    it('returns the dek', async () => {
      // To pass this test, fill out the dek selector
      // in ./src/extractors/custom/www.ilfattoquotidiano.it/index.js.
      const { dek } = await result;

      // Update these values with the expected values from
      // the article.
      console.log(dek);

      assert.equal(
        dek,
        'Per il sottosegretario Giancarlo Giorgetti qualsiasi decisione sugli aumenti Iva da 23 miliardi previsti dalle clausole di salvaguardia è prematura. “La flat tax si farà con l’aumento dell’Iva? Questo si vedrà nella legge di bilancio, adesso non si può ancora dire”. Una posizione possibilista che sembra fare a pugni con gli annunci dei vicepremier Luigi Di Maio e …'
      );
    });

    it('returns the lead_image_url', async () => {
      // To pass this test, fill out the lead_image_url selector
      // in ./src/extractors/custom/www.ilfattoquotidiano.it/index.js.
      const { lead_image_url } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        lead_image_url,
        `https://st.ilfattoquotidiano.it/wp-content/uploads/2019/02/11/salvini-di-maio-conte-1300.jpg`
      );
    });

    it('returns the content', async () => {
      // To pass this test, fill out the content selector
      // in ./src/extractors/custom/www.ilfattoquotidiano.it/index.js.
      // You may also want to make use of the clean and transform
      // options.
      const { content } = await result;

      const $ = cheerio.load(content || '');

      const first13 = excerptContent(
        $('*')
          .first()
          .text(),
        13
      );

      // Update these values with the expected values from
      // the article.
      assert.equal(
        first13,
        'Per il sottosegretario Giancarlo Giorgetti qualsiasi decisione sugli aumenti Iva da 23 miliardi'
      );
    });
  });
});
