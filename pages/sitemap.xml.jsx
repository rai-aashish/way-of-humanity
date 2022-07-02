import React from 'react';
import { createClient, linkResolver } from 'prismicio';
import { renderToStaticMarkup } from 'react-dom/server';

const SitemapIndex = () => null;

const Sitemap = ({ pages }) => {
  const origin = process.env.NEXT_PUBLIC_BASE_URL || 'https://wayofhumanity.com.au';

  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      {pages?.map((page, index) => {
        const lastModified = new Date(page.last_publication_date).toISOString();

        if (linkResolver(page)) {
          return (
            <url key={index}>
              <loc>{origin + linkResolver(page)}</loc>
              <lastmod>{lastModified}</lastmod>
            </url>
          );
        }
      })}
    </urlset>
  );
};

export const getServerSideProps = async ({ res }) => {
  const client = createClient();
  const pages = await client.dangerouslyGetAll();

  const markUp = renderToStaticMarkup(<Sitemap pages={pages} />);

  res.setHeader('Content-Type', 'text/xml');
  res.write(markUp);
  res.end();

  return {
    props: {},
  };
};

export default SitemapIndex;
