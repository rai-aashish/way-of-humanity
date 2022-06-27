import MyComponent from '../../../../slices/SidebarAdvertisement';

export default {
  title: 'slices/SidebarAdvertisement',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'sidebar_advertisement',
      items: [],
      primary: {
        title: [
          {
            type: 'heading4',
            text: 'Integrate frictionless solutions',
            spans: [],
          },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Veniam aliqua cupidatat fugiat consequat ad aliquip elit et ad sit voluptate dolor. Aliquip sint ex dolore proident officia consequat nisi fugiat aute exercitation cillum.',
            spans: [],
          },
        ],
        image: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop',
        },
        linkLabel: 'orchestrate synergistic synergies',
        linkURL: { link_type: 'Web', url: 'http://twitter.com' },
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
