import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';
// Styles
import classes from './link.module.scss';

interface LinkProps extends HTMLAnchorElement {
  className: string;
}

const Link: FunctionComponent<LinkProps> = ({ children, className, ...props }) => {
  return (
    <a className={clsx(classes['link'], className)} {...props}>
      {children}
    </a>
  );
};

export default Link;
