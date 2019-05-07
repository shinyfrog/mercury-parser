export const WwwLacucinaitalianaItExtractor = {
  domain: 'www.lacucinaitaliana.it',

  title: {
    selectors: ['.article-title'],
  },

  author: {
    selectors: ['.article-header-meta span.author-wrap a'],
  },

  date_published: {
    selectors: ['.article-header-meta .date'],
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
    selectors: ['.col-content .entry'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
