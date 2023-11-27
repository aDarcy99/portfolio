export const SocketIcon = ({ width = '32', height = '32', ...props }) => {
  return (
    <svg width={width} height={width} viewBox={`0 0 ${width} ${height}`} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15.988 0.000442505C7.17424 0.000442505 0.000488281 7.17419 0.000488281 15.9879C0.000488281 24.8017 7.17424 31.9754 15.988 31.9754C24.8017 31.9754 31.9755 24.8017 31.9755 15.9879C31.9755 7.17419 24.802 0.000442505 15.988 0.000442505ZM15.988 2.67019C23.359 2.67019 29.306 8.61694 29.306 15.9879C29.306 23.3592 23.359 29.3059 15.988 29.3059C8.61699 29.3059 2.66999 23.3592 2.66999 15.9879C2.66999 8.61694 8.61699 2.67019 15.988 2.67019Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.0975 15.179C15.5985 12.319 19.023 9.35951 22.6003 6.58301C20.724 9.46626 18.7943 12.3113 16.918 15.1943C15.3088 15.2018 13.6993 15.2018 12.0975 15.179ZM15.057 16.773C16.674 16.773 18.2833 16.773 19.8925 16.796C16.3688 19.641 12.9595 22.6233 9.37476 25.392C11.251 22.5088 13.1808 19.6563 15.057 16.773Z'
        fill='white'
      />
    </svg>
  );
};

export default SocketIcon;