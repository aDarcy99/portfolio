import React, { ReactNode } from 'react';
// Styles
import classes from './headerItem.module.scss';

interface Props {
  children: ReactNode;
}

const HeaderItem = ({ children, ...props }: Props) => {
  return <div className={classes['root']}>{children}</div>;
};

export default HeaderItem;
