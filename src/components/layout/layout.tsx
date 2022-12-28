import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
// Styles
import classes from './layout.module.scss';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  isHeaderVisible?: Boolean;
  isFooterVisible?: Boolean;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, className, isHeaderVisible = true, isFooterVisible = true, ...props }) => {
  
  return (
    <div className={clsx(classes['layout'], className)}>
      {isHeaderVisible ? <Header /> : null}
      <main className={clsx(classes['content'])}>{children}</main>
      {isFooterVisible ? <Footer /> : null}
    </div>
  );
};

export default Layout;
