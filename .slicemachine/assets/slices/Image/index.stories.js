import MyComponent from '../../../../slices/Image';

export default {
  title: 'slices/Image',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'image',
      items: [],
      primary: {
        image: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop',
        },
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
