import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const HeartMain = (props) => (
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
      d="M12.367 12.785c2.245-2.456 4.94-2.456 7.633.492 2.694-2.948 5.388-2.948 7.633-.492 2.245 2.457 1.347 5.405 0 7.862S20 29 20 29s-6.225-5.786-7.633-8.353c-1.347-2.457-2.245-5.405 0-7.862Z"
    />
  </Svg>
);

export default HeartMain;
