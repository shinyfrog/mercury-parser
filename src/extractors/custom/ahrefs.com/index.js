export const AhrefsComExtractor = {
  domain: 'ahrefs.com',

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
    selectors: [['meta[name="og:description"]', 'value']],
  },

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: [['.post-content']],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['.author-desktop', '#nav-anchor', '.post-navigation-left'],
  },
};
