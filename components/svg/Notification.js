import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const Notification = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="#F7F0F0" rx={8} />
    <Path
      stroke="#212122"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23 26a3 3 0 1 1-6 0m6 0h-6m6 0h6.5l-3.49-4.985a.065.065 0 0 1-.01-.033V17a6 6 0 0 0-12 0v3.982a.065.065 0 0 1-.01.034L11 26h6"
    />
  </Svg>
);

export default Notification;
