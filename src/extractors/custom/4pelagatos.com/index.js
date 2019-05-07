export const fourpelagatosComExtractor = {
  domain: '4pelagatos.com',

  title: {
    selectors: [['meta[name="twitter:title"]', 'value']],
  },

  author: {
    selectors: ['.meta-author a'],
  },

  date_published: {
    selectors: [['.post-header-meta .meta-time time', 'datetime']],
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
    selectors: ['div.entry-content'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
