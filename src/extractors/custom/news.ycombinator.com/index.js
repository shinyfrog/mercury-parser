export const NewsYcombinatorComExtractor = {
  domain: 'news.ycombinator.com',

  title: {
    selectors: ['title'],
  },

  author: {
    selectors: [
      // enter author selectors
    ],
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
    selectors: [
      // enter selectors
    ],
  },

  content: {
    selectors: ['body'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      div: 'span',
      '.fatitem': 'p',
      '.comment-tree': 'p',
      table: 'span',
      tr: 'span',
      td: 'span',
    },

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['.yclinks', '.ind', '.votelinks', '.pagetop', '.reply'],
  },
};
