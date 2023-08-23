import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseIcon = ({ ...props }: Props) => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M1.75 4.75H14.25V14.25H1.75V4.75Z' pathLength='1' stroke='#343A40' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M1.74997 6.25C1.74997 6.25 1.24997 9.75 4.74997 9.75H11.25C14.75 9.75 14.25 6.25 14.25 6.25M5.74997 4.25V1.75H10.25V4.25'
        pathLength='1'
        stroke='#343A40'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default BriefcaseIcon;
