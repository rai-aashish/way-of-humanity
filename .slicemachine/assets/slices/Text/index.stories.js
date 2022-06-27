import MyComponent from '../../../../slices/Text';

export default {
  title: 'slices/Text',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'text',
      items: [],
      primary: {
        text: [
          {
            type: 'paragraph',
            text: 'Do ad aute aliquip reprehenderit exercitation non laboris. Enim ad deserunt dolore nulla culpa aute dolore fugiat cillum in nulla. Et quis exercitation eu nisi culpa duis ad veniam quis esse laboris et dolore irure.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'Deserunt commodo excepteur ipsum adipisicing reprehenderit commodo. Aliqua proident ea do Lorem anim irure sunt qui labore nisi ex dolor. Sunt ut anim ad.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'Deserunt laborum commodo mollit nisi. Culpa non ipsum laborum nostrud proident ut veniam.',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
