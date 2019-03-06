export const ArstechnicaComExtractor = {
  domain: 'arstechnica.com',

  title: {
    selectors: ['.article-header h1'],
  },

  author: {
    selectors: ['.article-header .author'],
  },

  date_published: {
    selectors: [['.article-header time[datetime]', 'datetime']],
  },

  dek: {
    selectors: ['.article-header h2'],
  },

  lead_image_url: {
    selectors: ['figure.image.center.large img'],
  },

  content: {
    selectors: ['.article-guts'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      '<ul class="toc">': 'p',
    },

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['aside', 'nav'],
  },
};
