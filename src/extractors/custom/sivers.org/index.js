export const SiversOrgExtractor = {
  domain: 'sivers.org',

  title: {
    selectors: ['header h1'],
  },

  author: {
    selectors: ['footer a:first-child'],
  },

  date_published: {
    selectors: ['header small'],
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
    selectors: ['#content article'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['.blogparent', 'header', 'footer'],
  },
};
