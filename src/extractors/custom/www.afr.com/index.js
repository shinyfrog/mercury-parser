export const WwwAfrComExtractor = {
  domain: 'www.afr.com',

  title: {
    selectors: [['meta[name="og:title"]', 'value']],
  },

  author: {
    selectors: [
      // enter author selectors
    ],
  },

  date_published: {
    selectors: [['meta[name="article:published_time"]', 'value']],
  },

  dek: {
    selectors: ['#content ._2pclE'],
  },

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['#content'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      div: 'p',
    },

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: ['aside', '._15gTA', '._2-p2K._2siYO'],
  },
};
