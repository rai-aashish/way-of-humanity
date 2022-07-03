import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Container from 'components/common/Container';
import { RichTextField, KeyTextField, LinkField, ImageField } from '@prismicio/types';
import Button from 'components/common/Button';
import * as PrismicH from '@prismicio/helpers';
import { linkResolver } from 'prismicio';
import { Parallax } from 'react-parallax';
import Image from 'next/image';
interface ContactUsProps {
  slice: {
    primary: {
      title: RichTextField;
      description: KeyTextField;
      ctaLinkTo: LinkField;
      ctaLinkLabel: KeyTextField;
      backgroundImage: ImageField;
    };
  };
}
const ContactUs: React.FC<ContactUsProps> = ({ slice }) => (
  <section aria-label="contact us" className="relative after:absolute after:inset-0 after:bg-[rgba(39,60,74,0.52)]">
    <Parallax
      bgImage={slice.primary.backgroundImage.url as string}
      bgImageAlt={slice.primary.backgroundImage.alt as string}
      strength={500}
      bgClassName="object-cover"
    >
      <Container grid className="py-28 md:py-31 lg:py-38 relative z-10">
        <div className="col-span-full md:col-span-11 lg:cols-span-7">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => <h2 className="text-white text-h3 md:text:h2">{children}</h2>,
              heading3: ({ children }) => <h3 className="text-white">{children}</h3>,
            }}
          />
        </div>

        <p className="text-white my-5 text-h5 col-span-full md:col-span-8 lg:col-span-5">{slice.primary.description}</p>

        <div className="col-span-full mt-8">
          <Button
            variant="lite"
            size="large"
            asLink
            href={PrismicH.asLink(slice.primary.ctaLinkTo, linkResolver) || '#'}
          >
            {slice.primary.ctaLinkLabel}
          </Button>
        </div>
      </Container>
    </Parallax>
    <div className="absolute inset-0 -z-10 ">
      <Image
        src={slice.primary.backgroundImage.url as string}
        alt={slice.primary.backgroundImage.alt as string}
        layout="fill"
        objectFit="cover"
      />
    </div>
  </section>
);

export default ContactUs;
