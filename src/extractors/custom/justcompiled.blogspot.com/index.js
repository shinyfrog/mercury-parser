export const JustcompiledBlogspotComExtractor = {
  domain: 'justcompiled.blogspot.com',

  title: {
    selectors: ['.post-title.entry-title'],
  },

  author: {
    selectors: ['span[itemprop="name"]'],
  },

  date_published: {
    selectors: [['abbr.published[title]', 'title']],
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
    selectors: ['.post-body'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
