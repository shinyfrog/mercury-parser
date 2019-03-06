export const WwwNikonpassionComExtractor = {
  domain: 'www.nikonpassion.com',

  title: {
    selectors: ['h1.entry-title'],
  },

  author: {
    selectors: ['.entry-meta .entry-meta-date:first-child'],
  },

  date_published: {
    selectors: ['.entry-meta .entry-meta-date:nth-child(2)'],
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
