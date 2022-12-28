export const CssIcon = ({width = "32", height = "32",...props}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.90201 27.201L3.65601 2H28.344L26.095 27.197L15.985 30L5.90201 27.201Z"
        fill="#1572B6"
      />
      <path
        d="M16 27.858L24.17 25.593L26.092 4.061H16V27.858Z"
        fill="#33A9DC"
      />
      <path
        d="M16 13.191H20.09L20.372 10.026H16V6.935H23.75L23.676 7.764L22.917 16.282H16V13.191V13.191Z"
        fill="white"
      />
      <path
        d="M16.019 21.218L16.005 21.222L12.563 20.292L12.343 17.827H9.23999L9.67299 22.68L16.004 24.438L16.019 24.434V21.218V21.218Z"
        fill="#EBEBEB"
      />
      <path
        d="M19.827 16.151L19.455 20.29L16.008 21.22V24.436L22.344 22.68L22.391 22.158L22.928 16.151H19.827V16.151Z"
        fill="white"
      />
      <path
        d="M16.011 6.935V10.026H8.54501L8.48301 9.331L8.34201 7.764L8.26801 6.935H16.011V6.935Z"
        fill="#EBEBEB"
      />
      <path
        d="M16 13.191V16.282H12.601L12.539 15.587L12.399 14.02L12.325 13.191H16V13.191Z"
        fill="#EBEBEB"
      />
    </svg>
  );
};

export default CssIcon;
