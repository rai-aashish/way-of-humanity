import { NextPage, GetStaticProps } from 'next';
import { PrismicDocument } from '@prismicio/types';
import { SliceZone } from '@prismicio/react';
import { createClient } from 'prismicio';
import Layout from 'components/Layout';
import MetaTags from 'components/MetaTags';
import { components } from 'slices';

interface PageProps {
  homePage: PrismicDocument;
  header: PrismicDocument;
}

const Home: NextPage<PageProps> = ({ homePage, header }) => {
  console.log(homePage);

  return (
    <Layout header={header}>
      <MetaTags
        title={homePage.data?.title}
        description={homePage.data?.description}
        keywords={homePage.data?.keywords}
        revisitAfter={homePage.data?.revisitAfter}
      />
      {/* @ts-ignore */}
      <SliceZone slices={homePage.data.slices} components={components} />
    </Layout>
  );
};

export default Home;

//fetch data
export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  let homePage, header;

  try {
    header = await client.getSingle('header');
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
    props: { homePage, header },
    revalidate: 60,
  };
};
