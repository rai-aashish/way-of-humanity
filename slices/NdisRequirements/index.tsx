import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Container } from 'components/common/Container';
import { RichTextField, KeyTextField } from '@prismicio/types';
import { BadgeCheckIcon } from '@heroicons/react/solid';
import DecorateHeading from 'components/DecorateHeading';

interface NdisRequirementsProps {
  slice: {
    primary: { title: RichTextField; description: RichTextField };
    items: { requirement: KeyTextField }[];
  };
}

const NdisRequirements: React.FC<NdisRequirementsProps> = ({ slice }) => (
  <section>
    <Container className="my-10 md:my-12">
      <div className="mb-6 md:mb-10">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-h3 md:text-h2">
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
      </div>
      <div>
        <PrismicRichText field={slice.primary.description} />
      </div>
      {/* //? requirement list */}
      <div>
        <ul className="mt-3 md:mt-5">
          <Container grid noPaddingX>
            {slice.items.map(({ requirement }, index) => (
              <li key={index} className="col-span-full md:col-span-6  p-1 flex gap-x-3 md:gap-x-4 mb-4 last:mb-0">
                <span>
                  <BadgeCheckIcon className="w-10 aspect-square fill-accent-700" />
                </span>
                {requirement}
              </li>
            ))}
          </Container>
        </ul>
      </div>
    </Container>
  </section>
);

export default NdisRequirements;
