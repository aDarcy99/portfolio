import React, { SVGProps } from 'react';

interface Props {
  className?: string;
  height?: string;
  width?: string;
  color?: string;
}

const HomeIcon = ({ className, height = '24', width = '24', color = '#495057' }: Props) => {
  return (
    <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M6 8L12 3L18 8V20H16V13L15 12H9L8 13V20H6V8Z' fill={color} fillOpacity='0.3' />
      <path d='M5 21H19' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M5 21V8M19 21V8' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M9 21V13H15V21' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M2 10L12 2L22 10' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};

export default HomeIcon;
