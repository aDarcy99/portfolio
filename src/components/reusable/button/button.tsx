import React, { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent, ReactNode } from 'react';
// Functions
import clsx from 'clsx';
// Styles
import styles from './button.module.scss';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outlined' | 'transparent';
  width?: 'fit-content' | 'fit-container';
  color?: 'purple' | 'white';
}

const Button: FunctionComponent<ButtonProps> = ({ children, className, size = 'md', width = 'fit-content', variant = 'solid', color = 'purple', ...props }) => {
  return (
    <button
      className={clsx(styles['root'], styles[`size-${size}`], styles[`width-${width}`], styles[`variant-${variant}`], styles[`color-${color}`], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
