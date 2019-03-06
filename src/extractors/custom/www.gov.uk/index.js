export const WwwGovUkExtractor = {
  domain: 'www.gov.uk',

  title: {
    selectors: ['#content h1'],
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
    selectors: ['#i-really-hope-this-selector-is-not-on-the-page #really'],
  },

  content: {
    selectors: ['#wrapper'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {
      '<div class=grid-row>': '',
      '<div class="column-two-thirds">': '',
    },

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
