import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { RichTextField, KeyTextField, ImageField } from '@prismicio/types';
import Container from 'components/common/Container';
import ServiceCard from '../../components/cards/ServiceCard';

interface ServicesSectionProps {
  slice: {
    items: { serviceBrief: KeyTextField; serviceTitle: RichTextField; thumbnail: ImageField }[];
    primary: {
      sectionTitle: RichTextField;
    };
  };
}
const ServicesSection: React.FC<ServicesSectionProps> = ({ slice }) => (
  <section className="mt-22 mb-28">
    <Container grid className="mb-28">
      <div className="col-start-2 col-span-10 text-center">
        <PrismicRichText
          field={slice.primary.sectionTitle}
          components={{
            heading2: ({ children }) => (
              <h2>
                <span className="inline-block relative after:absolute after:w-[80%] after:h-[3px] after:bg-accent-800 after:opacity-80 after:-bottom-3 after:-translate-x-1/2 after:left-1/2">
                  {children}
                </span>
              </h2>
            ),
            heading3: ({ children }) => (
              <h3>
                <span className="inline-block relative after:absolute after:w-[80%] after:h-[3px] after:bg-accent-900 after:-bottom-3 after:-translate-x-1/2 after:left-1/2">
                  {children}
                </span>
              </h3>
            ),
          }}
        />
      </div>
    </Container>

    <Container grid className="gap-y-10">
      {slice.items.map((service, index) => (
        <ServiceCard
          key={index}
          thumbnail={service.thumbnail}
          serviceTitle={service.serviceTitle}
          serviceBrief={service.serviceBrief}
          className="col-span-4"
        />
      ))}
    </Container>
  </section>
);

export default ServicesSection;
