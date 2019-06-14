export const WwwFujixpassionComExtractor = {
  domain: 'www.fujixpassion.com',

  title: {
    selectors: ['header.entry-header h1'],
  },

  author: {
    selectors: ['.entry-meta .entry-author'],
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
    selectors: [['meta[name="og:image:secure_url"]', 'value']],
  },

  content: {
    selectors: ['.entry-content'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['.wpautbox-above'],
  },
};
