import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorIcon = ({ ...props }: Props) => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4.75 14.25H11.25M8 11.75V14.25M1.75 1.75H14.25V11.25H1.75V1.75Z'
        pathLength='1'
        stroke='#343A40'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default MonitorIcon;
