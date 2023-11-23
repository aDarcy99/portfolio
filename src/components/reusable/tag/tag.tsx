import React, { ReactNode } from 'react';
// Functions
import clsx from 'clsx';
// Styles
import styles from './tag.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

const Tag = ({ children, className, ...props }: Props) => {
  return <div className={clsx(styles['root'], className)}>{children}</div>;
};

export default Tag;
