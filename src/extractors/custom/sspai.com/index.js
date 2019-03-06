export const SspaiComExtractor = {
  domain: 'sspai.com',

  title: {
    selectors: ['h1.title'],
  },

  author: {
    selectors: ['.user-card h4 span'],
  },

  date_published: {
    selectors: ['article time'],
  },

  dek: {
    selectors: [
      // enter selectors
    ],
  },

  lead_image_url: {
    selectors: ['img'],
  },

  content: {
    selectors: ['article'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      //
    ],
  },
};
