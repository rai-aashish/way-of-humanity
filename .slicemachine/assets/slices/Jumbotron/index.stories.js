import MyComponent from '../../../../slices/Jumbotron';

export default {
  title: 'slices/Jumbotron',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'jumbotron',
      items: [
        { heading: 'expedite viral technologies' },
        { heading: 'repurpose efficient content' },
        { heading: 'utilize turn-key action-items' },
      ],
      primary: {
        description: [
          {
            type: 'paragraph',
            text: 'Mollit sit aute incididunt mollit aliqua occaecat reprehenderit id duis irure mollit laboris id incididunt.',
            spans: [],
          },
        ],
        primaryButtonLabel: 'repurpose customized eyeballs',
        primaryButtonLink: { link_type: 'Web', url: 'http://twitter.com' },
        secondaryButtonLabel: 'morph compelling communities',
        secondaryButtonLink: 'orchestrate visionary e-business',
        heroImage: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop',
        },
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
