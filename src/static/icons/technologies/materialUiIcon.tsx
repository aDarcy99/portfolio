export const MaterialUiIcon = ({width = "32", height = "32",...props}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M0.00158691 17.3879V0L12.0007 8.69396V14.49L4.00127 8.69396V20.286L0.00158691 17.3879Z"
          fill="#00B0FF"
        />
        <path
          d="M12.0003 8.69396L23.9994 0V17.3879L16 23.184L12.0003 20.286L19.9997 14.4899V8.69396L12.0003 14.49V8.69396Z"
          fill="#0081CB"
        />
        <path
          d="M12.0003 20.286V26.0819L19.9997 31.878V26.0819L12.0003 20.286Z"
          fill="#00B0FF"
        />
        <path
          d="M19.9997 31.8778L31.9988 23.1838V11.5922L27.9991 14.49V20.2861L19.9997 26.082V31.8781V31.8778ZM27.9991 8.69396V2.89788L31.9988 0V5.79608L27.9991 8.69396Z"
          fill="#0081CB"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MaterialUiIcon;
