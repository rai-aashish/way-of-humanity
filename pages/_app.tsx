import 'styles/globals.css';
import 'styles/modifier.css';
import Link from 'next/link';
import type { AppProps } from 'next/app';
import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import MessengerChat from 'components/MessengerChat';
import CookieConsent from 'components/CookieConsent';
import { linkResolver, repositoryName } from '../prismicio';

import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
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
          {/* @ts-ignore */}
          <Component {...pageProps} />
          <MessengerChat />
          {/* cookies and analytics */}
          <CookieConsent />
        </PrismicPreview>
      </PrismicProvider>
    </CookiesProvider>
  );
}

export default MyApp;
