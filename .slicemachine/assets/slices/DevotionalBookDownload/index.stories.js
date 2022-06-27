import MyComponent from '../../../../slices/DevotionalBookDownload';

export default {
  title: 'slices/DevotionalBookDownload',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'devotional_book_download',
      items: [],
      primary: {
        title: [
          {
            type: 'heading2',
            text: 'Implement cutting-edge portals',
            spans: [],
          },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Incididunt proident sint ad nostrud dolore laborum eu amet tempor esse incididunt labore pariatur occaecat aliqua. Veniam laboris enim eiusmod voluptate id nulla esse reprehenderit amet et Lorem labore cupidatat irure officia. Et ut quis exercitation.',
            spans: [],
          },
        ],
        bookImage: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop',
        },
        emailInputPlaceholder: 'drive interactive schemas',
        submitButtonLabel: 'architect distributed methodologies',
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';

export const _Sidebar = () => (
  <MyComponent
    slice={{
      variation: 'sidebar',
      name: 'sidebar',
      slice_type: 'devotional_book_download',
      items: [],
      primary: {
        title: [
          {
            type: 'heading2',
            text: 'Visualize e-business eyeballs',
            spans: [],
          },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Cupidatat fugiat nulla eu consectetur Lorem. Minim minim eu aute sunt nostrud velit ullamco. Irure mollit sit irure exercitation consectetur Lorem pariatur.',
            spans: [],
          },
        ],
        bookImage: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop',
        },
        emailInputPlaceholder: 'e-enable e-business interfaces',
        submitButtonLabel: 'benchmark sticky web services',
      },
      id: '_Sidebar',
    }}
  />
);
_Sidebar.storyName = 'sidebar';
