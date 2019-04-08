export const GetpocketComExtractor = {
  domain: 'getpocket.com',

  title: {
    selectors: ['.article_header h1'],
  },

  author: {
    selectors: ['div.meta_section.section_publisher a.publisher_url'],
  },

  date_published: {
    selectors: [
      'div.meta_section.section_author.profile_image_default span.date',
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
    selectors: ['div.article_body'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
