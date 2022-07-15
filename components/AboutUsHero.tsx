import * as React from 'react';
import { Container } from 'components/common/Container';
import { PrismicRichText } from '@prismicio/react';
import { RichTextField } from '@prismicio/types';
import DecorateHeading from 'components/DecorateHeading';

interface AboutUsHeroProps {
  mainHeading: RichTextField;
  mainDescription: RichTextField;
}

const AboutUsHero: React.FunctionComponent<AboutUsHeroProps> = ({ mainHeading, mainDescription }) => {
  return (
    <Container grid className="my-7 md:my-14">
      <div className="col-span-full md:text-center md:col-start-2 md:col-span-10 ">
        <PrismicRichText
          field={mainHeading}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-h4 md:text-h3 lg:text-h2">
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

      <div className="mt-4 md:mt-6 lg:mt-10  text-content-body text-justify col-span-full md:col-start-1 md:col-span-11 lg:col-start-2 lg:col-span-10">
        <PrismicRichText
          field={mainDescription}
          components={{
            paragraph: ({ children }) => <p className="mt-2">{children}</p>,
          }}
        />
      </div>
    </Container>
  );
};

export default AboutUsHero;
