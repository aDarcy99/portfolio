import React, { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent, ReactNode } from 'react';
// Functions
import clsx from 'clsx';
// Styles
import styles from './button.module.scss';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  width?: 'fit-content' | 'fit-container';
}

const Button: FunctionComponent<ButtonProps> = ({ children, className, size = 'md', width = 'fit-content', ...props }) => {
  return (
    <button className={clsx(styles['root'], styles[`size-${size}`], styles[`width-${width}`], className)} {...props}>
      <div className={clsx(styles['shadow'])} />
      <div className={clsx(styles['side'])} />
      <div className={clsx(styles['front'])}>{children}</div>
    </button>
  );
};

export default Button;
