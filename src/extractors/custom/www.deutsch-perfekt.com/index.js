export const WwwDeutschperfektComExtractor = {
  domain: 'www.deutsch-perfekt.com',

  title: {
    selectors: ['article header h1'],
  },

  author: {
    selectors: ['span.author-name'],
  },

  date_published: {
    selectors: [
      // enter selectors
    ],
  },

  dek: {
    selectors: [],
  },

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['main.article-body'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
