import React, { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent, ReactNode } from 'react';
// Functions
import clsx from 'clsx';
// Styles
import classes from './button.module.scss';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  width?: 'fit-content' | 'fit-container';
}

const Button: FunctionComponent<ButtonProps> = ({ children, className, size = 'md', width = 'fit-content', ...props }) => {
  return (
    <button className={clsx(classes['root'], classes[`size-${size}`], classes[`width-${width}`], className)} {...props}>
      <div className={clsx(classes['shadow'])} />
      <div className={clsx(classes['side'])} />
      <div className={clsx(classes['front'])}>{children}</div>
    </button>
  );
};

export default Button;
