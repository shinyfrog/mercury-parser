export const BlogCodewithdanComExtractor = {
  domain: 'blog.codewithdan.com',

  title: {
    selectors: ['h1.entry-title'],
  },

  author: {
    selectors: ['span.author_name a'],
  },

  date_published: {
    selectors: [['time.entry-date', 'datetime']],
  },

  dek: {
    selectors: [
      // enter selectors
    ],
  },

  lead_image_url: {
    selectors: [],
  },

  content: {
    selectors: ['section.entry-content'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['social-block', '.wp-block-image'],
  },
};
