export const eightthlightComExtractor = {
  domain: '8thlight.com',

  title: {
    selectors: ['.blog-post h1'],
  },

  author: {
    selectors: ['.blog-post .author'],
  },

  date_published: {
    selectors: ['.blog-post .date'],
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
    selectors: ['html'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      '.breadcrumbs',
      'header',
      'noscript',
      '.social-media-share-buttons',
      '.author-block',
      '.button-wrap',
      'aside',
      '.hero',
      'footer',
    ],
  },
};
