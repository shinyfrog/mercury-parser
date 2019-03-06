export const WwwProcessStExtractor = {
  domain: 'www.process.st',

  title: {
    selectors: ['.container h1'],
  },

  author: {
    selectors: ['.content-post .author .name'],
  },

  date_published: {
    selectors: ['.content-post .author .date'],
  },

  dek: {
    selectors: [
      // enter selectors
    ],
  },

  lead_image_url: {
    selectors: ['.content img'],
  },

  content: {
    selectors: ['.content'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
