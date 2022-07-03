import * as React from 'react';
import Header from './Header';
import { PrismicDocument } from '@prismicio/types';
import Footer from './Footer';

interface LayoutProps {
  header: PrismicDocument;
  footer: PrismicDocument;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, header, footer }) => {
  return (
    <React.Fragment>
      <Header header={header} />
      {children}
      <Footer footer={footer} header={header} />
    </React.Fragment>
  );
};

export default Layout;
