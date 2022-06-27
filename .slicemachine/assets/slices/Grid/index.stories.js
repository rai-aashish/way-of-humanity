import MyComponent from '../../../../slices/Grid';

export default {
  title: 'slices/Grid',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'grid',
      items: [
        {
          title: [
            {
              type: 'heading2',
              text: 'Leverage value-added systems',
              spans: [],
            },
          ],
          description: [
            {
              type: 'paragraph',
              text: 'Officia commodo ut ad eu voluptate non. Non ea et nostrud amet tempor amet dolor exercitation deserunt dolore sint magna labore nostrud. Eiusmod incididunt velit laborum do in est irure consectetur proident laborum reprehenderit.',
              spans: [],
            },
          ],
        },
        {
          title: [
            {
              type: 'heading2',
              text: 'Orchestrate web-enabled architectures',
              spans: [],
            },
          ],
          description: [
            {
              type: 'paragraph',
              text: 'Exercitation velit ad eiusmod cillum qui proident elit enim est ipsum eiusmod nostrud ex.',
              spans: [],
            },
          ],
        },
        {
          title: [
            { type: 'heading2', text: 'Unleash scalable vortals', spans: [] },
          ],
          description: [
            {
              type: 'paragraph',
              text: 'Anim adipisicing adipisicing fugiat ad fugiat non nisi duis est.',
              spans: [],
            },
          ],
        },
        {
          title: [
            {
              type: 'heading2',
              text: 'Architect synergistic bandwidth',
              spans: [],
            },
          ],
          description: [
            {
              type: 'paragraph',
              text: 'Ipsum labore dolor occaecat labore nostrud velit in.',
              spans: [],
            },
          ],
        },
      ],
      primary: {},
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
