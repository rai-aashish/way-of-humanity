import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';
import sm from './sm.json';

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'about-us-page':
      return `/about-us`;
    case 'blog-post':
      return `/blog/${doc.uid}`;
    case 'contact-page':
      return `/contact`;
    case 'disibality-care-ndis-page': //? :/ spelling mistake while content modeling
      return `/disability-care-ndis`;
    case 'home-page':
      return '/';
    case 'contact-us-page':
      return '/contact-us';
    case 'team-page':
      return `/team`;

    default:
      return '#';
  }
}

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
}
