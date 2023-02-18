import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const Share = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="#fff" fillOpacity={0.32} rx={8} />
    <Path
      fill="#fff"
      d="M24.39 14.567 17.612 7.79a.847.847 0 0 0-1.446.599v3.003a9.331 9.331 0 0 0-8.472 9.28v1.271a.847.847 0 0 0 1.512.526 9.706 9.706 0 0 1 6.681-3.43c.043-.006.149-.014.28-.022v2.927a.848.848 0 0 0 1.445.599l6.778-6.778a.847.847 0 0 0 0-1.198Zm-6.53 5.331v-1.767a.847.847 0 0 0-.847-.847c-.216 0-1.098.042-1.323.072a11.864 11.864 0 0 0-6.257 2.498 7.636 7.636 0 0 1 7.58-6.806.847.847 0 0 0 .847-.847v-1.767l4.733 4.732-4.733 4.732Z"
    />
  </Svg>
);

export default Share;
