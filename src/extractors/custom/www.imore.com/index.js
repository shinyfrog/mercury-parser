export const WwwImoreComExtractor = {
  domain: 'www.imore.com',

  title: {
    selectors: [['meta[name="og:title"]', 'value']],
  },

  author: {
    selectors: ['.article-header__authors'],
  },

  date_published: {
    selectors: [['time.article-header__time', 'datetime']],
  },

  dek: {
    selectors: ['header.article-header .article-header__intro'],
  },

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['.article-body'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      div: 'p',
    },

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
