import MyComponent from '../../../../slices/FooterLinkGroup';

export default {
  title: 'slices/FooterLinkGroup',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'footer_link_group',
      items: [
        {
          linkLabel: 'generate bleeding-edge users',
          linkURL: { link_type: 'Web', url: 'https://prismic.io' },
        },
        {
          linkLabel: 'revolutionize cross-platform e-business',
          linkURL: { link_type: 'Web', url: 'http://twitter.com' },
        },
        {
          linkLabel: 'optimize holistic users',
          linkURL: { link_type: 'Web', url: 'https://slicemachine.dev' },
        },
        {
          linkLabel: 'morph wireless deliverables',
          linkURL: { link_type: 'Web', url: 'http://google.com' },
        },
        {
          linkLabel: 'synthesize proactive bandwidth',
          linkURL: { link_type: 'Web', url: 'https://prismic.io' },
        },
      ],
      primary: {
        title: [
          {
            type: 'heading1',
            text: 'Productize out-of-the-box mindshare',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
