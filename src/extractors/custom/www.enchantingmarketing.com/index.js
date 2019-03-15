export const WwwEnchantingmarketingComExtractor = {
  domain: 'www.enchantingmarketing.com',

  title: {
    selectors: ['h1.entry-title'],
  },

  author: {
    selectors: ['span.entry-author-name'],
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
    selectors: [
      //
    ],
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
