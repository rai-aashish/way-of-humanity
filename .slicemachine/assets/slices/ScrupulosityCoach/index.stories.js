import MyComponent from '../../../../slices/ScrupulosityCoach';

export default {
  title: 'slices/ScrupulosityCoach',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'scrupulosity_coach',
      items: [],
      primary: {
        title: [
          { type: 'heading2', text: 'Cultivate sticky channels', spans: [] },
        ],
        linkLabel: 'innovate leading-edge methodologies',
        linkURL: { link_type: 'Web', url: 'https://prismic.io' },
        profile: { link_type: 'Web', url: 'https://prismic.io' },
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
