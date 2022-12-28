import React, { ReactNode } from 'react';
// Functions
import clsx from 'clsx';
// Styles
import classes from './tag.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

const Tag = ({ children, className, ...props }: Props) => {
  return <div className={clsx(classes['root'], className)}>{children}</div>;
};

export default Tag;
