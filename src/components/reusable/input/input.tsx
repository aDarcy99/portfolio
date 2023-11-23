import clsx from 'clsx';
import React, { FunctionComponent, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
// Styles
import styles from './input.module.scss';

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
}

const Input: FunctionComponent<InputProps> = ({ className, type, leftAdornment, rightAdornment, ...props }) => {
  return (
    <div className={clsx(styles['input'], className)}>
      <div className={clsx(styles['input__front'])}>
        {leftAdornment && <div className={clsx(styles['input__adornment--left'])}>{leftAdornment}</div>}
        <input className={clsx(styles['input__content'])} type={type} {...props} />
        {rightAdornment && <div className={clsx(styles['input__adornment--right'])}>{rightAdornment}</div>}
      </div>
      <div className={clsx(styles['input__sides'])} />
      <div className={clsx(styles['input__shadow'])} />
    </div>
  );
};

export default Input;
