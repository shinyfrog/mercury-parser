export const WwwHonestbrokerComExtractor = {
  domain: 'www.honest-broker.com',

  title: {
    selectors: [['meta[name="og:title"]', 'value']],
  },

  author: {
    selectors: [
      // enter author selectors
    ],
  },

  date_published: {
    selectors: [
      // enter selectors
    ],
  },

  dek: {
    selectors: [
      // enter selectors
    ],
  },

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['.available-content'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      h3: 'b',
    },

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['.header-anchor-widget offset-top'],
  },
};
