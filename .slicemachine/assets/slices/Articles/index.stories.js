import MyComponent from '../../../../slices/Articles';

export default {
  title: 'slices/Articles',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'articles',
      items: [
        { article: { link_type: 'Web', url: 'http://twitter.com' } },
        { article: { link_type: 'Web', url: 'http://twitter.com' } },
        { article: { link_type: 'Web', url: 'http://google.com' } },
      ],
      primary: {
        title: [
          { type: 'heading2', text: 'Synthesize sticky channels', spans: [] },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Aliquip sit minim aute. Voluptate ex mollit adipisicing ad ea minim adipisicing anim tempor aliquip elit nulla mollit qui. Ea sit sint cupidatat incididunt ullamco tempor proident ipsum labore eiusmod aliqua ad esse amet.',
            spans: [],
          },
        ],
        linkLabel: 'engineer innovative e-commerce',
        linkURL: { link_type: 'Web', url: 'https://slicemachine.dev' },
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
