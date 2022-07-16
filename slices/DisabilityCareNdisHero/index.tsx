import React from 'react';
import Image from 'components/Image';
import { PrismicRichText } from '@prismicio/react';
import Container from 'components/common/Container';
import { RichTextField, ImageField, KeyTextField } from '@prismicio/types';

interface DisabilityCareNdisProps {
  slice: {
    primary: {
      description: RichTextField;
      heroImage: ImageField;
    };
    items: { featureTitle: RichTextField; featureDescription: KeyTextField }[];
  };
}

const DisabilityCareNdisHero: React.FC<DisabilityCareNdisProps> = ({ slice }) => (
  <section>
    <Container grid>
      <div className="relative col-span-full md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 w-full aspect-[1314/543]">
        <Image
          src={slice.primary.heroImage.url as string}
          alt={slice.primary.heroImage.alt as string}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </Container>
    {slice.primary.description && (
      <div>
        <PrismicRichText field={slice.primary.description} />
      </div>
    )}

    <Container grid className="gap-y-10 my-10 md:my-15 ">
      {slice.items.map(({ featureTitle, featureDescription }, index) => (
        <div
          key={index}
          className="bg-accent-800 bg-opacity-10 md:bg-transparent rounded text-left md:text-center p-2 col-span-full md:col-span-4 lg:col-span-3"
        >
          <div className="mb-1 md:mb-4">
            <PrismicRichText
              field={featureTitle}
              components={{
                heading3: ({ children }) => <h3 className="text-h4 md:text-h3">{children}</h3>,
              }}
            />
          </div>
          <p className="text-gray-600">{featureDescription}</p>
        </div>
      ))}
    </Container>
  </section>
);

export default DisabilityCareNdisHero;
