export const NpmIcon = ({width = "32", height = "32",...props}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10.555H30V19.89H16V21.446H9.778V19.889H2V10.555ZM3.556 18.334H6.667V13.666H8.222V18.333H9.778V12.111H3.556V18.334ZM11.334 12.111V19.89H14.445V18.334H17.556V12.111H11.334ZM14.445 13.667H16V16.779H14.444L14.445 13.667ZM19.112 12.111V18.334H22.223V13.666H23.779V18.333H25.335V13.666H26.891V18.333H28.447V12.111H19.112Z"
        fill="#CB3837"
      />
    </svg>
  );
};

export default NpmIcon;
