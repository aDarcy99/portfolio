export const WebpackIcon = ({width = "32", height = "32",...props}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2.043L3.90002 9.032V23.011L16 30L28.106 23.011V9.032L16 2.043Z"
        fill="url(#paint0_radial)"
      />
      <path
        d="M16 9.133L10 12.6V19.532L16 23L22 19.534V12.6L16 9.133Z"
        fill="#6F95DB"
      />
      <path
        d="M16 2L3.86902 9.037L16 15.642L28.131 9.08L16 2ZM16 16.548L3.86902 22.981L16 29.974L28.088 22.937L16 16.548V16.548Z"
        fill="white"
        fillOpacity="0.1"
      />
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.9048 15.1613) scale(12.9451 14.9477)"
        >
          <stop stopColor="#93B4E7" />
          <stop offset="0.593" stopColor="#B9D1F8" />
          <stop offset="1" stopColor="#9CB6E0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default WebpackIcon;
