import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const ServicesSection = ({ slice }) => (
  <section>
    <h2 className="text-blue-700">asa</h2>
    <span className="title text-red-200">
      {slice.primary.title ? <PrismicRichText field={slice.primary.title} /> : <h2>Template slice, update me!</h2>}
    </span>
    {slice.primary.description ? (
      <PrismicRichText field={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </section>
);

export default ServicesSection;
