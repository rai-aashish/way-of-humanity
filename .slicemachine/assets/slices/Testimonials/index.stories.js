import MyComponent from '../../../../slices/Testimonials';

export default {
  title: 'slices/Testimonials',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'testimonials',
      items: [
        {
          testimonial: [
            {
              type: 'paragraph',
              text: 'Deserunt in magna deserunt incididunt.',
              spans: [],
            },
          ],
          author: 'engineer user-centric deliverables',
        },
        {
          testimonial: [
            {
              type: 'paragraph',
              text: 'Laboris irure quis dolore sit irure pariatur adipisicing ullamco.',
              spans: [],
            },
          ],
          author: 'target wireless systems',
        },
        {
          testimonial: [
            {
              type: 'paragraph',
              text: 'Fugiat eiusmod eu Lorem cupidatat nisi minim amet ex excepteur proident ut dolore aute incididunt ea. Magna et exercitation magna consectetur tempor est minim proident deserunt sint velit.',
              spans: [],
            },
          ],
          author: 'deploy front-end e-business',
        },
        {
          testimonial: [
            {
              type: 'paragraph',
              text: 'Non ad ut veniam ut mollit aute Lorem officia labore minim occaecat tempor. Dolore exercitation excepteur est amet ad occaecat quis do nostrud labore duis eiusmod magna quis. Cupidatat deserunt esse occaecat fugiat ea quis.',
              spans: [],
            },
          ],
          author: 'transition value-added infrastructures',
        },
      ],
      primary: {
        title: [
          { type: 'heading2', text: 'E-enable B2B experiences', spans: [] },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';

export const _TestimonialsGroupCoaching = () => (
  <MyComponent
    slice={{
      variation: 'testimonialsGroupCoaching',
      name: 'Testimonials - Group Coaching',
      slice_type: 'testimonials',
      items: [
        {
          testimonial: [
            {
              type: 'paragraph',
              text: 'Magna excepteur esse do aliqua. Laborum voluptate cupidatat magna tempor consectetur. Pariatur officia ullamco dolore excepteur exercitation occaecat.',
              spans: [],
            },
          ],
          author: 'orchestrate wireless paradigms',
          rating: '1',
        },
        {
          testimonial: [
            {
              type: 'paragraph',
              text: 'Aliquip dolor laboris excepteur magna enim aliquip. Amet proident ea ex magna fugiat in.',
              spans: [],
            },
          ],
          author: 'productize proactive solutions',
          rating: '4',
        },
      ],
      primary: { title: 'seize granular infrastructures' },
      id: '_TestimonialsGroupCoaching',
    }}
  />
);
_TestimonialsGroupCoaching.storyName = 'Testimonials - Group Coaching';
