import { NextPage, GetStaticProps } from 'next';
import Layout from 'components/Layout';
import { createClient } from 'prismicio';
import { PrismicDocument } from '@prismicio/types';
import Container from 'components/common/Container';

interface TeamProps {
  header: PrismicDocument;
}

const Team: NextPage<TeamProps> = ({ header }) => {
  return (
    <Layout header={header}>
      <Container>our team</Container>
    </Layout>
  );
};

export default Team;

//fetch serverside data
export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  let header;

  try {
    header = await client.getSingle('header');
  } catch (error: any) {
    if (error.message === 'No documents were returned') {
      return { notFound: true };
    } else {
      throw error;
    }
  }

  //re-generate the page after 60 seconds of request
  return {
    props: { header },
    revalidate: 60,
  };
};
