import assert from 'assert';
import URL from 'url';
import cheerio from 'cheerio';

import Mercury from 'mercury';
import getExtractor from 'extractors/get-extractor';
import { excerptContent } from 'utils/text';

const fs = require('fs');

describe('BlogGetpostmanComExtractor', () => {
  describe('initial test case', () => {
    let result;
    let url;
    beforeAll(() => {
      url =
        'https://blog.getpostman.com/2016/06/26/using-postman-proxy-to-capture-and-inspect-api-calls-from-ios-or-android-devices/';
      const html = fs.readFileSync(
        './fixtures/blog.getpostman.com/1558352907232.html'
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
      // in ./src/extractors/custom/blog.getpostman.com/index.js.
      const { title } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        title,
        `Using Postman Proxy to Capture and Inspect API Calls from iOS or Android Devices - Postman Blog`
      );
    });

    it('returns the author', async () => {
      // To pass this test, fill out the author selector
      // in ./src/extractors/custom/blog.getpostman.com/index.js.
      const { author } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(author, `Shamasis`);
    });

    it('returns the date_published', async () => {
      // To pass this test, fill out the date_published selector
      // in ./src/extractors/custom/blog.getpostman.com/index.js.
      const { date_published } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(date_published, `2016-06-25T20:00:13.000Z`);
    });

    it('returns the dek', async () => {
      // To pass this test, fill out the dek selector
      // in ./src/extractors/custom/blog.getpostman.com/index.js.
      let { dek } = await result;
      dek = dek.substring(0, 100);

      // Update these values with the expected values from
      // the article.
      assert.equal(
        dek,
        'In this tutorial, I will guide you on how you can use Postman’s proxy feature to inspect HTTP commun'
      );
    });

    it('returns the lead_image_url', async () => {
      // To pass this test, fill out the lead_image_url selector
      // in ./src/extractors/custom/blog.getpostman.com/index.js.
      const { lead_image_url } = await result;

      // Update these values with the expected values from
      // the article.
      assert.equal(
        lead_image_url,
        `https://blog.getpostman.com/wp-content/uploads/2016/06/Using-Postman-Proxy-to-Capture-and-Inspect-API-Calls-from-iOS-or-Android-Devices-01.jpg`
      );
    });

    it('returns the content', async () => {
      // To pass this test, fill out the content selector
      // in ./src/extractors/custom/blog.getpostman.com/index.js.
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
        'In this tutorial, I will guide you on how you can use Postman’s'
      );
    });
  });
});
