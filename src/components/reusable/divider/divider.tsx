import React from 'react';
// Functions
import clsx from 'clsx';
// Styles
import styles from './divider.module.scss';

interface IDividerProps {
  className?: string;
  direction?: 'horizontal' | 'vertical';
}

const Divider = ({ className, direction = 'horizontal' }: IDividerProps) => {
  return <div className={clsx(styles['root'], styles[direction], className)} />;
};

export default Divider;
