export const WwwDezeenComExtractor = {
  domain: 'www.dezeen.com',

  title: {
    selectors: [['meta[name="twitter:title"]', 'value']],
  },

  author: {
    selectors: ['a[rel="author"]'],
  },

  date_published: {
    selectors: [['meta[name="article:published_time"]', 'value']],
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
    selectors: ['section.main-article-body'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['.related-in-article-wrapper', '.read-more'],
  },
};
