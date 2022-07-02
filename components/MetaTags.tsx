import Head from 'next/head';
import * as React from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords: string;
  author?: string;
  revisitAfter?: string;
}

const MetaTags: React.FunctionComponent<MetaTagsProps> = ({ title, revisitAfter, description, keywords, author }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content={revisitAfter ? revisitAfter : '3 days'} />
      {author && <meta name="author" content={author} />}
    </Head>
  );
};

export default MetaTags;
