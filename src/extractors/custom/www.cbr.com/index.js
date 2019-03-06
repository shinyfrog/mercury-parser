export const WwwCbrComExtractor = {
  domain: 'www.cbr.com',

  title: {
    selectors: ['h1.article-title'],
  },

  author: {
    selectors: ['.article-info-ul li:first-child'],
  },

  date_published: {
    selectors: [['.article-info-ul time[datetime]', 'datetime']],
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
    selectors: ['.article-body'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['.article-tags', '.next-btn-img', '.next-btn-text.text-trimmed'],
  },
};
