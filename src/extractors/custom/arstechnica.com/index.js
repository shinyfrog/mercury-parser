export const ArstechnicaComExtractor = {
  domain: 'arstechnica.com',

  title: {
    selectors: ['.article-header h1'],
  },

  author: {
    selectors: ['span.author[itemprop=name]'],
  },

  date_published: {
    selectors: [['time.date[datetime]', 'datetime']],
  },

  dek: {
    selectors: ['.article-header h2'],
  },

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['.article-content.post-page'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      '<ul class="toc">': '<ul>',
    },

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['aside'],
  },
};
