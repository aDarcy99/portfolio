export const NoneIcon = ({ width = '32', height = '32', ...props }) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M26.6667 5.33333L5.33337 26.6667M26.6667 26.6667L5.33337 5.33333L26.6667 26.6667Z'
        stroke='hsl(var(--col-icon))'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default NoneIcon;
