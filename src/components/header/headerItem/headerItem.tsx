import React, { ReactNode } from 'react';
// Styles
import styles from './headerItem.module.scss';

interface Props {
  children: ReactNode;
}

const HeaderItem = ({ children, ...props }: Props) => {
  return <div className={styles['root']}>{children}</div>;
};

export default HeaderItem;
