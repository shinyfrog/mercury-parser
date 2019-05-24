export const PhysicallivingComExtractor = {
  domain: 'physicalliving.com',

  title: {
    selectors: ['article header h1'],
  },

  author: {
    selectors: [
      // enter author selectors
    ],
  },

  date_published: {
    selectors: ['div[itemprop="datePublished"]'],
  },

  dek: {
    selectors: [
      // enter selectors
    ],
  },

  lead_image_url: {
    selectors: [
      // enter selectors
    ],
  },

  content: {
    selectors: ['.entry-content'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
