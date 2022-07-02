import React from 'react';
import Image from 'next/image';
import { PrismicRichText } from '@prismicio/react';
import Container from 'components/common/Container';
import { ImageField, RichTextField, KeyTextField, LinkField } from '@prismicio/types';
import * as PrismicH from '@prismicio/helpers';
import { linkResolver } from 'prismicio';
import Button from '../../components/common/Button';

interface HomePageLandingProps {
  slice: {
    items: {
      buttonVariant: 'solid' | 'outline' | 'lite';
      buttonSize: 'large' | 'medium';
      buttonLabel: KeyTextField;
      linkTo: LinkField;
    }[];
    primary: {
      title: RichTextField;
      description: RichTextField;
      landingImage: ImageField;
    };
  };
}

const HomePageLanding: React.FC<HomePageLandingProps> = ({ slice }) => (
  <section>
    <Container noPaddingX grid className="lg:px-5">
      <div className="relative px-5 md:px-0 row-start-2 lg:row-start-1 col-span-full md:col-start-2 md:col-span-10 lg:col-start-1 lg:col-span-5 flex flex-col justify-center my-8 md:my-12 lg:my-0">
        <div>
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => <h1 className="text-h2 md:text-h1">{children}</h1>,
            }}
          />
        </div>
        <div className="my-6 md:my-7 lg:my-8 font-cursive text-3xl text-content-heading">
          <PrismicRichText field={slice.primary.description} />
        </div>

        <div className="flex gap-6 items-center justify-center lg:justify-start">
          {slice.items.map((link, index) => (
            <Button
              key={index}
              variant={link.buttonVariant}
              size={link.buttonSize}
              asLink
              href={PrismicH.asLink(link.linkTo, linkResolver) || '#'}
            >
              {link.buttonLabel}
            </Button>
          ))}
        </div>

        {/* //? svg curves */}
        <LandingCurves className="absolute right-0 top-0 opacity-40 -z-10" />
      </div>

      <div className="col-span-full md:col-start-2 md:col-span-10 lg:col-start-6 lg:col-span-7 relative aspect-4/3">
        <Image
          src={slice.primary.landingImage.url as string}
          alt={slice.primary.landingImage.alt as string}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </Container>
  </section>
);

//svg graphics
interface LandingCurvesProps {
  className?: string;
}
const LandingCurves: React.FC<LandingCurvesProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="465"
      height="843"
      viewBox="0 0 465 843"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M464.119 1.34521C464.119 37.7909 438.169 69.9126 401.863 76.2134C242.167 103.887 116.532 236.822 105.927 404.101"
        stroke="#0194D8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.7164 605.478C126.758 594.606 186.894 513.313 194.629 410.401C197.998 365.307 209.226 320.584 233.68 282.285C279.342 210.629 357.568 163.435 444.403 157.381"
        stroke="#0194D8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M447.4 237.685C338.233 248.557 278.222 329.849 270.487 432.886C267.118 477.98 255.765 522.579 231.436 560.755C185.774 632.411 107.548 679.605 20.7133 685.782"
        stroke="#0194D8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 841.699C1 805.253 26.9505 773.131 63.2563 766.83C222.952 739.156 348.712 606.222 359.192 438.942V438.572"
        stroke="#0194D8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default HomePageLanding;
