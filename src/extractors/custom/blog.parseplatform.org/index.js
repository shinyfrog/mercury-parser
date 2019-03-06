export const BlogParseplatformOrgExtractor = {
  domain: 'blog.parseplatform.org',

  title: {
    selectors: ['h1.h1--white'],
  },

  author: {
    selectors: ['.copy-block .author'],
  },

  date_published: {
    selectors: ['.hero--docs-landing__content .date'],
  },

  dek: {
    selectors: [],
  },

  lead_image_url: {
    selectors: ['#this_selector_is_not_really_on_the_page #ihope'],
  },

  content: {
    selectors: ['article.posts'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
