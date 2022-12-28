import React from 'react';

interface Props {
  className?: string;
  height?: string;
  width?: string;
  color?: string;
}

const PaperPlaneIcon = ({ className, height = '24', width = '24', color = '#495057', ...props }: Props) => {
  return (
    <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M21 5L18.5 20M21 5L9 13.5' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M21 5L2 12.5' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M18.5 20L9 13.5' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M2 12.5L9 13.5' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M12 16L9 19M9 13.5V19' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};

export default PaperPlaneIcon;
