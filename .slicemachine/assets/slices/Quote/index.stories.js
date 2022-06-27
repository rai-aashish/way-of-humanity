import MyComponent from '../../../../slices/Quote';

export default {
  title: 'slices/Quote',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'quote',
      items: [],
      primary: {
        quote: [
          {
            type: 'paragraph',
            text: 'Sit officia sit cupidatat sit nostrud sint cillum nulla anim culpa ipsum ut. Aliquip ad eiusmod officia commodo anim non.',
            spans: [],
          },
        ],
        reference: [
          {
            type: 'paragraph',
            text: 'Eiusmod ipsum non non officia labore ad sint minim aliqua voluptate occaecat magna deserunt.',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
