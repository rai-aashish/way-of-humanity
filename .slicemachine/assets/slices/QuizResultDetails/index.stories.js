import MyComponent from '../../../../slices/QuizResultDetails';

export default {
  title: 'slices/QuizResultDetails',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'quiz_result_details',
      items: [],
      primary: {
        description: [
          {
            type: 'paragraph',
            text: 'Elit cupidatat culpa cupidatat dolor duis laborum excepteur occaecat aute. Quis officia non incididunt.',
            spans: [],
          },
        ],
        buttonLabel: 'matrix ubiquitous partnerships',
        buttonLink: { link_type: 'Web', url: 'http://google.com' },
        answerCategory: { link_type: 'Web', url: 'http://google.com' },
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
