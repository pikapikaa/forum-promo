import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Clock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      stroke="#212122"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.667}
      d="M16.667 16.667 14 14V7.333M26 14c0 6.627-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2s12 5.373 12 12Z"
    />
  </Svg>
);

export default Clock;
