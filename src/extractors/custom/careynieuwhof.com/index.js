export const CareynieuwhofComExtractor = {
  domain: 'careynieuwhof.com',

  title: {
    selectors: ['h1.fl-post-title'],
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
    selectors: [['meta[name="twitter:image:src"]', 'value']],
  },

  content: {
    selectors: ['.fl-post-content'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['.ss-inline-share-wrapper'],
  },
};
