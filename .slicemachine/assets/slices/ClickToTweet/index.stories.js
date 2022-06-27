import MyComponent from '../../../../slices/ClickToTweet';

export default {
  title: 'slices/ClickToTweet',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'click_to_tweet',
      items: [],
      primary: {
        tweetText:
          'Take outside the camp him who has cursed; then let all who heard him lay their hands on his head, and let all the congregation stone him. ',
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
