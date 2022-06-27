import * as React from 'react';

interface LayoutProps {}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
