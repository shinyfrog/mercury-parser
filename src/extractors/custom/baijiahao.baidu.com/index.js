export const BaijiahaoBaiduComExtractor = {
  domain: 'baijiahao.baidu.com',

  title: {
    selectors: ['.article-title h2'],
  },

  author: {
    selectors: ['.article-desc div.author-txt p.author-name'],
  },

  date_published: {
    selectors: [['meta[itemprop="dateUpdate"]', 'value']],
  },

  dek: {
    selectors: [
      // enter selectors
    ],
  },

  lead_image_url: {
    selectors: [
      // enter selectors
    ],
  },

  content: {
    selectors: ['div.article-content'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
