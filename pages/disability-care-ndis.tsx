import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { SliceZone } from '@prismicio/react';
import { components } from 'slices';
import { createClient } from 'prismicio';
import { PrismicDocument } from '@prismicio/types';
import Layout from 'components/Layout';
import MetaTags from 'components/MetaTags';

interface DisabilityCareNdisProps {
  disabilityCareNdisPage: PrismicDocument;
  header: PrismicDocument;
  footer: PrismicDocument;
}

const DisabilityCareNdis: NextPage<DisabilityCareNdisProps> = ({ disabilityCareNdisPage, header, footer }) => {
  console.log(disabilityCareNdisPage);

  return (
    <Layout header={header} footer={footer}>
      <MetaTags
        title={disabilityCareNdisPage.data.title}
        description={disabilityCareNdisPage.data.metaDescription}
        keywords={disabilityCareNdisPage.data.keywords}
        revisitAfter={disabilityCareNdisPage.data.revisitAfter}
      />

      {/* //? slicezone */}
      <SliceZone components={components} slices={disabilityCareNdisPage.data.slices} />
    </Layout>
  );
};

export default DisabilityCareNdis;

//fetch data
export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  let disabilityCareNdisPage, header, footer;

  try {
    header = await client.getSingle('header');
    footer = await client.getSingle('footer');
    disabilityCareNdisPage = await client.getSingle('disibality-care-ndis-page');
  } catch (error: any) {
    if (error.message === 'No documents were returned') {
      return { notFound: true };
    } else {
      throw error;
    }
  }

  //re-generate the page after 60 seconds of request
  return {
    props: { disabilityCareNdisPage, header, footer },
    revalidate: 60,
  };
};
