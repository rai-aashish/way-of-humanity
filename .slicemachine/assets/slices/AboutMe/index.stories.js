import MyComponent from '../../../../slices/AboutMe';

export default {
  title: 'slices/AboutMe',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'about_me',
      items: [],
      primary: {
        title: [
          { type: 'heading1', text: 'Monetize magnetic content', spans: [] },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Veniam laboris dolore duis ex nisi commodo aliquip reprehenderit eu quis.',
            spans: [],
          },
        ],
        image: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop',
        },
        actionLabel: 'repurpose holistic systems',
        actionLink: { link_type: 'Web', url: 'https://slicemachine.dev' },
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
