import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { createClient } from 'prismicio';
import { PrismicDocument } from '@prismicio/types';

import Layout from 'components/Layout';
import Button from 'components/common/Button';
import Container from 'components/common/Container';

interface ErrorPage404Props {
  header: PrismicDocument;
  footer: PrismicDocument;
}

const ErrorPage404: NextPage<ErrorPage404Props> = ({ header, footer }) => {
  return (
    <Layout header={header} footer={footer}>
      <Container>
        <div className="p-8 text-center">
          <h1 className="text-error-base text-[60px] font-fold">ERROR:404</h1>
          <h3>Page doesn't exist</h3>
          <h6 className="mt-10">The URL you are trying to access doesn't exist or has been removed.</h6>
        </div>

        <div className="my-8 flex items-center justify-center gap-x-7">
          <Button asLink href="/" variant="solid" size="large">
            Go Home
          </Button>
        </div>
      </Container>
    </Layout>
  );
};

export default ErrorPage404;

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  let homePage, header, footer;

  try {
    header = await client.getSingle('header');
    footer = await client.getSingle('footer');
    homePage = await client.getSingle('home-page');
  } catch (error: any) {
    if (error.message === 'No documents were returned') {
      return { notFound: true };
    } else {
      throw error;
    }
  }

  //re-generate the page after 60 seconds of request
  return {
    props: { homePage, header, footer },
    revalidate: 60,
  };
};
