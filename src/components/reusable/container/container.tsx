import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';
// Styles
import styles from './container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  width?: 'sm' | 'md' | 'lg';
}

const Container: FunctionComponent<ContainerProps> = ({ children, width = 'md', className }) => {
  return <div className={clsx(styles['root'], styles[`root--width-${width}`], className)}>{children}</div>;
};

export default Container;
