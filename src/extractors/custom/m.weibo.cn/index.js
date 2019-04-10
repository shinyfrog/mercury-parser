export const MWeiboCnExtractor = {
  domain: 'm.weibo.cn',

  title: {
    selectors: ['div.THISISNOTGOINGTOWORK'],
  },

  author: {
    selectors: ['div.THISISNOTGOINGTOWORK'],
  },

  date_published: {
    selectors: ['div.THISISNOTGOINGTOWORK'],
  },

  dek: {
    selectors: ['div.THISISNOTGOINGTOWORK'],
  },

  lead_image_url: {
    selectors: ['div.THISISNOTGOINGTOWORK'],
  },

  content: {
    selectors: ['div.THISISNOTGOINGTOWORK'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
