import { ReactNode } from 'react';

import Header from './header/Header.tsx';
import Footer from './Footer.tsx';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
