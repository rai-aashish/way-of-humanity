import * as React from 'react';
import Header from './Header';
import { PrismicDocument } from '@prismicio/types';

interface LayoutProps {
  header: PrismicDocument;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, header }) => {
  return (
    <React.Fragment>
      <Header header={header} />
      {children}
    </React.Fragment>
  );
};

export default Layout;
