import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const Smile = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Rect width={48} height={48} fill="#212122" rx={24} />
    <Path
      stroke="#fff"
      strokeWidth={3}
      d="m21.518 14-2.482 10.637M30.027 14l-2.482 10.637m-15.6 3.191c3.073 2.718 7.067 5.724 12.41 5.672 6.12-.059 8.39-5.318 11.7-8.154"
    />
  </Svg>
);

export default Smile;
