import React from 'react';
// Functions
import clsx from 'clsx';
// Styles
import classes from './divider.module.scss';

interface IDividerProps {
  className?: string;
  direction?: 'horizontal' | 'vertical';
}

const Divider = ({ className, direction = 'horizontal' }: IDividerProps) => {
  return <div className={clsx(classes['root'], classes[direction], className)} />;
};

export default Divider;
