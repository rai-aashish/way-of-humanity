import Container from 'components/common/Container';
import React from 'react';
import Image from 'next/image';
import { KeyTextField, RichTextField, ImageField } from '@prismicio/types';
import { PrismicRichText } from '@prismicio/react';
import { CheckIcon } from '@heroicons/react/solid';
import Backdrop from '../../components/common/Backdrop';
import DecorateHeading from '../../components/DecorateHeading';

interface AlwaysForYouSectioProps {
  slice: {
    items: { service: KeyTextField }[];
    primary: {
      title: RichTextField;
      description: RichTextField;
      featureImage: ImageField;
    };
  };
}
const AlwaysForYouSection: React.FC<AlwaysForYouSectioProps> = ({ slice }) => (
  <section aria-label="always for you my-7">
    <Backdrop className="py-10 md:py-12 lg:py-19 overflow-hidden">
      <Container grid className="gap-y-8 md:gap-y-9">
        {/* //? typography */}
        <div className="col-span-full md:col-start-2 md:col-span-8 lg:col-start-1 lg:col-span-5">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2 className="py-1 text-h3 md:text-h2">
                  <DecorateHeading start="left">{children}</DecorateHeading>
                </h2>
              ),
              heading3: ({ children }) => (
                <h3>
                  <DecorateHeading start="left">{children}</DecorateHeading>
                </h3>
              ),
            }}
          />
          <div className="mt-5 mb-8">
            <PrismicRichText field={slice.primary.description} />
          </div>
          <ul>
            {slice.items.map(({ service }, index) => (
              <LiWithCheck key={index} label={service} />
            ))}
          </ul>
        </div>

        {/* //? feature image */}
        <div className="relative aspect-16/10 rounded-lg overflow-hidden col-span-full md:col-start-2 md:col-span-10 lg:col-start-6 lg:col-span-7">
          <Image
            src={slice.primary.featureImage.url as string}
            alt={slice.primary.featureImage.alt as string}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Container>
    </Backdrop>
  </section>
);

const LiWithCheck: React.FC<{ label: KeyTextField }> = ({ label }) => {
  return (
    <li className="flex gap-x-3 items-center mb-2 md:mb-3 last:mb-0">
      <CheckIcon className="w-6 h-6 fill-success-base" />
      <span>{label}</span>
    </li>
  );
};
export default AlwaysForYouSection;
