import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { RichTextField } from '@prismicio/types';
import Backdrop from 'components/common/Backdrop';
import Container from 'components/common/Container';

interface BriefDescriptionSectionProps {
  slice: {
    primary: {
      title: RichTextField;
      description: RichTextField;
    };
  };
}

const BriefDescriptionSection: React.FC<BriefDescriptionSectionProps> = ({ slice }) => (
  <section aria-label="brief description">
    <Backdrop className="py-15 lg:py-22 relative overflow-hidden">
      <Container grid className="text-center">
        <div className="col-start-1 col-span-4 md:col-start-2 md:col-span-10 mb-9 md:mb-10 lg:mb-20">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => <h2 className="text-h3 md:text-h2">{children}</h2>,
            }}
          />
        </div>
        <div className="col-span-4 md:col-start-2 md:col-span-10">
          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => <p className="mb-4 lg:mb-5 last:mt-0">{children}</p>,
            }}
          />
        </div>
      </Container>

      {/* //? svg */}
      <SvgGraphics className="absolute -bottom-8 -right-8 opacity-70 -z-10" />
    </Backdrop>
  </section>
);

const SvgGraphics: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="275"
      height="213"
      viewBox="0 0 275 213"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <path
          d="M245.035 1C169.759 27.1064 119.122 5.72199 98.26 60.3836C77.0396 115.985 26.0917 158.615 0.999756 150.783"
          stroke="#0194D8"
        />
        <path
          d="M149.338 63.1508C166.692 44.3505 223.48 38.6951 245.486 39.393L245.486 180.802L153.619 180.802L35.7923 180.465C31.9605 172 37.4995 151.583 54.9661 148.891C76.5765 145.56 88.0755 138.433 112.038 123.583L112.783 123.121C137.255 107.956 127.646 86.6511 149.338 63.1508Z"
          fill="#B2EBFF"
        />
      </g>
    </svg>
  );
};
export default BriefDescriptionSection;
