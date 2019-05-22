export const WwwThehungrychookComExtractor = {
  domain: 'www.thehungrychook.com',

  title: {
    selectors: [['meta[name="twitter:title"]', 'value']],
  },

  author: {
    selectors: [['meta[itemprop="author"]', 'value']],
  },

  date_published: {
    selectors: [['meta[itemprop="datePublished"]', 'value']],
  },

  dek: {
    selectors: [
      // enter selectors
    ],
  },

  lead_image_url: {
    selectors: [['meta[name="twitter:image"]', 'value']],
  },

  content: {
    selectors: ['.body.entry-content '],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      div: 'p',
    },

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
