import { RichTextField, KeyTextField, ImageField } from '@prismicio/types';

interface TeamCardsProps {
  slice: {
    primary: {
      sectionTitle: RichTextField;
    };
    items: {
      displayPicture: ImageField;
      memberName: RichTextField;
      memberDesignation: KeyTextField;
      briefDescription: KeyTextField;
    }[];
  };
}

export type { TeamCardsProps };
