import * as React from 'react';
import Layout from 'components/Layout';
import { NextPage, GetStaticProps } from 'next';
import { createClient } from 'prismicio';
import { PrismicDocument } from '@prismicio/types';

interface ContactUsProps {
  header: PrismicDocument;
  contactUsPage: PrismicDocument;
}

const ContactUs: NextPage<ContactUsProps> = ({ contactUsPage, header }) => {
  console.log(contactUsPage);
  return <Layout header={header}>contact us</Layout>;
};

export default ContactUs;

//fetch data
export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  let contactUsPage, header;

  try {
    header = await client.getSingle('header');
    contactUsPage = await client.getSingle('contact-us-page');
  } catch (error: any) {
    if (error.message === 'No documents were returned') {
      return { notFound: true };
    } else {
      throw error;
    }
  }

  //re-generate the page after 60 seconds of request
  return {
    props: { contactUsPage, header },
    revalidate: 60,
  };
};
