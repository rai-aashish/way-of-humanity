import MyComponent from '../../../../slices/NavItem';

export default {
  title: 'slices/NavItem',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'nav_item',
      items: [
        {
          subNavLabel: 'innovate next-generation e-business',
          subNavLink: { link_type: 'Web', url: 'http://twitter.com' },
          subNavDescription: 'envisioneer global bandwidth',
          subNavIcon: {
            dimensions: { width: 900, height: 500 },
            alt: 'Placeholder image',
            copyright: null,
            url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop',
          },
        },
        {
          subNavLabel: 'brand killer eyeballs',
          subNavLink: { link_type: 'Web', url: 'https://prismic.io' },
          subNavDescription: 'transition strategic e-business',
          subNavIcon: {
            dimensions: { width: 900, height: 500 },
            alt: 'Placeholder image',
            copyright: null,
            url: 'https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop',
          },
        },
        {
          subNavLabel: 'innovate back-end systems',
          subNavLink: { link_type: 'Web', url: 'http://twitter.com' },
          subNavDescription: 'orchestrate cross-media ROI',
          subNavIcon: {
            dimensions: { width: 900, height: 500 },
            alt: 'Placeholder image',
            copyright: null,
            url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop',
          },
        },
      ],
      primary: {
        navLabel: 'embrace cutting-edge blockchains',
        navLink: { link_type: 'Web', url: 'http://google.com' },
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
