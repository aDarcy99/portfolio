import React, { HTMLAttributes, SVGProps } from 'react';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  className?: string;
  height?: string;
  width?: string;
  color?: string;
}

const FlaskIcon = ({ ...props }: Props) => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M4.75 1.75H11.25M4.75 9.75H11.25M5.75 2.25V6.75L1.75 14.25H14.25L10.25 6.75V2.25'
        stroke='#343A40'
        pathLength='1'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default FlaskIcon;
