import { NextPage, GetStaticProps } from 'next';
import Layout from 'components/Layout';
import { createClient } from 'prismicio';
import { PrismicDocument } from '@prismicio/types';
import { SliceZone } from '@prismicio/react';
import { components } from 'slices';
import MetaTags from 'components/MetaTags';

interface TeamProps {
  header: PrismicDocument;
  footer: PrismicDocument;
  teamPage: PrismicDocument;
}

const Team: NextPage<TeamProps> = ({ header, footer, teamPage }) => {
  console.log(teamPage);

  return (
    <Layout header={header} footer={footer}>
      <MetaTags
        title={teamPage.data?.title}
        description={teamPage.data?.metaDescription}
        keywords={teamPage.data?.keywords}
        revisitAfter={teamPage.data?.revisitAfter ?? 3}
      />
      {/* //@ts-ignore */}
      <SliceZone slices={teamPage.data.slices} components={components} />
    </Layout>
  );
};

export default Team;

//fetch serverside data
export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  let header, footer, teamPage;

  try {
    header = await client.getSingle('header');
    footer = await client.getSingle('footer');
    teamPage = await client.getSingle('team-page');
  } catch (error: any) {
    if (error.message === 'No documents were returned') {
      return { notFound: true };
    } else {
      throw error;
    }
  }

  //re-generate the page after 60 seconds of request
  return {
    props: { header, footer, teamPage },
    revalidate: 60,
  };
};
