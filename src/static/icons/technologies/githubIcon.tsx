import React from 'react';

const GithubIcon = ({ width = '32', height = '32', ...props }) => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5.75 14.25C5.75 14.25 5.25 12.25 6.25 11.25C6.25 11.25 4.25 11.25 2.75 9.75C1.25 8.25 1.75 5.25 2.75 4.25C2.25 2.75 3.25 1.75 3.25 1.75C3.25 1.75 4.75 1.75 5.75 2.75C6.75 2.25 9.25 2.25 10.25 2.75C11.25 1.75 12.75 1.75 12.75 1.75C12.75 1.75 13.75 2.75 13.25 4.25C14.25 5.25 14.75 8.25 13.25 9.75C11.75 11.25 9.75 11.25 9.75 11.25C10.75 12.25 10.25 14.25 10.25 14.25M5.25 13.75C3.75 14.25 2.25 13.25 1.75 12.75'
        stroke='var(--icon-color)'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default GithubIcon;
