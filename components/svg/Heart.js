import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const Heart = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} rx={8} fill="#fff" fillOpacity={0.32} />
    <Path
      d="M9.7 10.054c1.902-2.081 4.184-2.081 6.466.416 2.282-2.497 4.564-2.497 6.466-.416 1.902 2.081 1.141 4.579 0 6.66-1.14 2.082-6.466 7.077-6.466 7.077s-5.274-4.902-6.466-7.077c-1.141-2.081-1.902-4.579 0-6.66Z"
      stroke="#fff"
      strokeWidth={1.694}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Heart;
