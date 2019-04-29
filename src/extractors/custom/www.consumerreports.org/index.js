export const WwwConsumerreportsOrgExtractor = {
  domain: 'www.consumerreports.org',

  title: {
    selectors: [['meta[name="og:title"]', 'value']],
  },

  author: {
    selectors: ['span[itemprop="author"]'],
  },

  date_published: {
    selectors: [['meta[name="publishDate"]', 'value']],
  },

  dek: {
    selectors: ['div.subhead.title h2'],
  },

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['div.main-content'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
