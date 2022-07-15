import 'styles/globals.css';
import 'styles/modifier.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '../prismicio';
import MessengerChat from 'components/MessengerChat';
import GoogleAnalytics from 'components/Analytics/GoogleAnalytics';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      // @ts-ignore
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
        <MessengerChat />
        <GoogleAnalytics />
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
