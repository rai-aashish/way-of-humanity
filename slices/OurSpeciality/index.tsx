import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { KeyTextField, ImageField, RichTextField } from '@prismicio/types';
import Container from 'components/common/Container';
import FeatureCard from '../../components/cards/FeatureCard';

interface OurSpecialityProps {
  slice: {
    primary: {
      title: RichTextField;
    };
    items: { featureTitle: KeyTextField; featureIcon: ImageField }[];
  };
}
const OurSpeciality: React.FC<OurSpecialityProps> = ({ slice }) => (
  <section aria-label="why choose us" className="my-17 md:my-20">
    <div className="mb-14 text-center">
      <PrismicRichText
        field={slice.primary.title}
        components={{
          heading2: ({ children }) => <h2 className="text-h3 md:text-h2">{children}</h2>,
        }}
      />
    </div>
    {/* //? cards */}
    <Container grid className="gap-y-6">
      {slice.items.length === 0 ? (
        <h4> please add some of your features </h4>
      ) : (
        slice.items.map((feature, index) => (
          <FeatureCard
            key={index}
            className="col-span-4 md:col-span-6 lg:col-span-4"
            featureTitle={feature.featureTitle}
            featureIcon={feature.featureIcon}
          />
        ))
      )}
    </Container>
  </section>
);

export default OurSpeciality;
