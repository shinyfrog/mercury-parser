export const MpWeixinQqComExtractor = {
  domain: 'mp.weixin.qq.com',

  title: {
    selectors: ['#activity-name'],
  },

  author: {
    selectors: ['#js_name'],
  },

  date_published: {
    selectors: ['#publish_time'],
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
    selectors: ['#js_content'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['img.__bg_gif'],
  },
};
