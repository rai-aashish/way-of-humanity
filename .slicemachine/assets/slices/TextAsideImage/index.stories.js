import MyComponent from '../../../../slices/TextAsideImage';

export default {
  title: 'slices/TextAsideImage',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'text_aside_image',
      items: [],
      primary: {
        image: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop',
        },
        text: [
          {
            type: 'paragraph',
            text: 'Aute fugiat aliqua duis ipsum ex ea Lorem consectetur Lorem voluptate exercitation ad nisi fugiat. Sit elit aliquip do et ad proident sint est. Dolor aliqua labore laboris do ea non ea ut eu cillum sit fugiat.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'Voluptate excepteur enim consequat exercitation. Aute laboris exercitation excepteur consequat veniam sit culpa aute laboris. Aute duis laborum velit mollit ut veniam anim.',
            spans: [],
          },
          {
            type: 'paragraph',
            text: 'Eu sit elit sint elit qui nulla anim consequat consequat nulla Lorem aute dolore minim. In ipsum dolor consectetur reprehenderit. Voluptate cillum culpa commodo magna dolor cupidatat nostrud anim esse dolor sunt.',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
