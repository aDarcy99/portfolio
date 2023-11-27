export const TailwindIcon = ({ width = '32', height = '32', ...props }) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16.001 6.4005C11.7342 6.4005 9.06848 8.533 8.00098 12.7997C9.60048 10.667 11.4677 9.86725 13.6005 10.4005C14.8182 10.704 15.6885 11.587 16.6522 12.5655C18.2207 14.1572 20.0362 16 24.001 16C28.2675 16 30.9335 13.8672 32.001 9.5995C30.4012 11.7335 28.5342 12.5332 26.4012 12C25.1837 11.6962 24.3145 10.8135 23.3495 9.835C21.782 8.24325 19.967 6.4005 16.001 6.4005ZM8.00098 16C3.73448 16 1.06848 18.1327 0.000976562 22.4005C1.60048 20.2665 3.46748 19.4667 5.60048 20C6.81823 20.3037 7.68848 21.1865 8.65223 22.165C10.2207 23.7567 12.0362 25.5995 16.001 25.5995C20.2675 25.5995 22.9335 23.467 24.001 19.2002C22.4012 21.333 20.5342 22.1327 18.4012 21.5995C17.1837 21.296 16.3145 20.413 15.3495 19.4345C13.782 17.8427 11.967 16 8.00098 16Z'
        fill='#38BDF8'
      />
    </svg>
  );
};

export default TailwindIcon;