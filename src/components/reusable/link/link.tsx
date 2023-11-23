import React, { ReactNode, DetailedHTMLProps, AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';
// Styles
import styles from './link.module.scss';

interface LinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  variant?: '';
}

const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <a className={clsx(styles['link'], className)} {...props}>
      {children}
    </a>
  );
};

export default Link;
