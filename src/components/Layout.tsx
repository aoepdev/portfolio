import { ReactNode } from 'react';

import Header from './Header.tsx';
import Footer from './Footer.tsx';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
