import MyComponent from '../../../../slices/PathToHealing';

export default {
  title: 'slices/PathToHealing',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'path_to_healing',
      items: [
        { listItem: 'benchmark ubiquitous partnerships' },
        { listItem: 'visualize compelling e-business' },
      ],
      primary: {
        title: [
          {
            type: 'heading2',
            text: 'Envisioneer efficient initiatives',
            spans: [],
          },
        ],
        image1: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop',
        },
        image2: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop',
        },
        image3: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop',
        },
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
