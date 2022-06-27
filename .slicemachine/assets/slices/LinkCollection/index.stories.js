import MyComponent from '../../../../slices/LinkCollection';

export default {
  title: 'slices/LinkCollection',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'link_collection',
      items: [],
      primary: {
        title: [
          { type: 'heading1', text: 'Enable compelling interfaces', spans: [] },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Laborum proident elit mollit excepteur aliquip pariatur anim.',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
