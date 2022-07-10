import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { KeyTextField, ImageField, RichTextField } from '@prismicio/types';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Container from 'components/common/Container';
import Image from 'next/image';

interface TestimonialsProps {
  slice: {
    primary: { title: RichTextField };
    items: { personName: KeyTextField; personImage: ImageField; statement: RichTextField }[];
  };
}
const Testimonials: React.FC<TestimonialsProps> = ({ slice }) => (
  <section className="my-17 md:my-20 lg:my-22">
    <Container grid>
      <div className="col-span-full mb-8 md:mb-15 text-center">
        <PrismicRichText field={slice.primary.title} />
      </div>

      <Carousel
        className="col-span-full lg:col-start-2 lg:col-span-10"
        ariaLabel="testimonials"
        showStatus={false}
        interval={4000}
        infiniteLoop
        autoPlay
        showThumbs={false}
        swipeable={false}
      >
        {slice.items.map((testimonial, index) => (
          <TestimonailCard
            key={index}
            personName={testimonial.personName}
            personImage={testimonial.personImage}
            statement={testimonial.statement}
          />
        ))}
      </Carousel>
    </Container>
  </section>
);

//
interface TestimonialCardProps {
  personImage: ImageField;
  personName: KeyTextField;
  statement: RichTextField;
}

const TestimonailCard: React.FC<TestimonialCardProps> = ({ personImage, personName, statement }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-7 bg-backdrop-white-100 rounded-2xl px-7 py-10">
      {/* //? display picture */}
      <div className="relative shadow-xl w-38 overflow-hidden h-38 border-4 border-backdrop-white-100 rounded-full">
        <Image src={personImage.url as string} alt={personImage.alt as string} layout="fill" objectFit="cover" />
      </div>
      {/* //? statement */}
      <div className="relative shadow-xl z-10 bg-gray-200 px-5 py-7 rounded-2xl flex-1">
        <div className="text-left">
          <PrismicRichText field={statement} />
        </div>
        <span className="mt-7 block text-h6 text-backdrop-black-60 text-right">- {personName}</span>

        <svg
          className="absolute -top-5 left-1/2 -translate-x-1/2 sm:translate-x-0 md:top-1/2 md:-translate-y-1/2 md:-left-6 fill-gray-200 z-0"
          width="31"
          height="33"
          viewBox="0 0 31 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 20L31 0V33L0 20Z" />
        </svg>
      </div>
    </div>
  );
};
export default Testimonials;
