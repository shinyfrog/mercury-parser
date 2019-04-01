export const ClutchpointsComExtractor = {
  domain: 'clutchpoints.com',

  title: {
    selectors: [['meta[name="og:title"]', 'value']],
  },

  author: {
    selectors: ['span.author a[rel="author"]'],
  },

  date_published: {
    selectors: ['time.post-date'],
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
    selectors: ['#mvp-content-main'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      '.mvp-post-tags',
      '.posts-nav-link',
      '.mvp-org-wrap',
      '.code-block',
      '.code-block-5',
    ],
  },
};
