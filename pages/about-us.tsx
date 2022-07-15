import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { SliceZone } from '@prismicio/react';
import { components } from 'slices';
import { createClient } from 'prismicio';
import { PrismicDocument } from '@prismicio/types';
import Layout from 'components/Layout';
import AboutUsHero from '../components/AboutUsHero';
import MetaTags from 'components/MetaTags';

interface AboutUsProps {
  aboutUsPage: PrismicDocument;
  header: PrismicDocument;
  footer: PrismicDocument;
}

const AboutUs: NextPage<AboutUsProps> = ({ aboutUsPage, header, footer }) => {
  console.log(aboutUsPage);

  return (
    <Layout header={header} footer={footer}>
      <MetaTags
        title={aboutUsPage.data.metaTitle}
        description={aboutUsPage.data.metaDescription}
        keywords={aboutUsPage.data.keywords}
        revisitAfter={aboutUsPage.data.revisitAfter}
      />
      {/* //? hero section of about us page */}
      <AboutUsHero mainHeading={aboutUsPage.data.mainHeading} mainDescription={aboutUsPage.data.mainDescription} />

      {/* //? slicezone */}
      <SliceZone components={components} />
    </Layout>
  );
};

export default AboutUs;

//fetch data
export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  let aboutUsPage, header, footer;

  try {
    header = await client.getSingle('header');
    footer = await client.getSingle('footer');
    aboutUsPage = await client.getSingle('about-us-page');
  } catch (error: any) {
    if (error.message === 'No documents were returned') {
      return { notFound: true };
    } else {
      throw error;
    }
  }

  //re-generate the page after 60 seconds of request
  return {
    props: { aboutUsPage, header, footer },
    revalidate: 60,
  };
};
