import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { ImageField, RichTextField } from '@prismicio/types';
import Container from '../../components/common/Container';
import Image from 'components/Image';

interface ImageWIthParagraphProps {
  slice: {
    primary: {
      image: ImageField;
      title: RichTextField;
      description: RichTextField;
      descriptionVerticalAlignCenter: boolean;
    };
    variation: 'default' | 'imageRight';
  };
}

const ImageWIthParagraph: React.FC<ImageWIthParagraphProps> = ({ slice }) => (
  <Container grid className="my-6 md:my-8">
    <div
      className={`relative col-span-full md:row-start-1 ${
        slice.variation === 'default' ? 'col-start-1' : 'md:col-start-8'
      } md:col-span-5 aspect-3/2`}
    >
      <Image
        src={slice.primary.image.url as string}
        alt={slice.primary.image.alt as string}
        layout="fill"
        objectFit="cover"
      />
    </div>

    <div
      className={` col-span-full md:row-start-1  ${
        slice.variation === 'default' ? 'md:col-start-6' : 'col-start-1'
      } md:col-span-7 ${slice.primary.descriptionVerticalAlignCenter ? 'mt-3 md:my-auto ' : 'mt-3 md:mt-0'}`}
    >
      <PrismicRichText
        field={slice.primary.title}
        components={{
          heading3: ({ children }) => <h3 className="text-h3 md:text-h4 mb-1 md:mb-2">{children}</h3>,
          heading4: ({ children }) => <h4 className="mb-1 md:mb-2">{children}</h4>,
        }}
      />
      <div>
        <PrismicRichText field={slice.primary.description} />
      </div>
    </div>
  </Container>
);

export default ImageWIthParagraph;
