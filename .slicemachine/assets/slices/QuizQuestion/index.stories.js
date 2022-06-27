import MyComponent from '../../../../slices/QuizQuestion';

export default {
  title: 'slices/QuizQuestion',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'quiz_question',
      items: [
        {
          answer: 'leverage dot-com channels',
          category: { link_type: 'Web', url: 'https://prismic.io' },
        },
        {
          answer: 'matrix distributed initiatives',
          category: { link_type: 'Web', url: 'http://google.com' },
        },
        {
          answer: 'optimize strategic e-business',
          category: { link_type: 'Web', url: 'http://twitter.com' },
        },
        {
          answer: 'transition interactive applications',
          category: { link_type: 'Web', url: 'https://prismic.io' },
        },
      ],
      primary: {
        question: [
          {
            type: 'heading3',
            text: 'Synthesize user-centric deliverables',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
