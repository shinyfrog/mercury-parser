export const WwwDouguoComExtractor = {
  domain: 'www.douguo.com',

  title: {
    selectors: ['title'],
  },

  author: {
    selectors: ['.author-info .nickname'],
  },

  date_published: {
    selectors: [
      // enter selectors
    ],
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
    selectors: ['#content #left'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      div: 'span',
      h2: 'h3',
      table: 'span',
      tbody: 'span',
      tr: 'p',
      td: 'span',
    },

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['#right'],
  },
};
