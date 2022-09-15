import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const MessageIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="#BFB393" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2a1 1 0 0 0-1 1v13.586l2.293-2.293A1 1 0 0 1 5 14h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3ZM.879.879A3 3 0 0 1 3 0h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5.414l-3.707 3.707A1 1 0 0 1 0 19V3A3 3 0 0 1 .879.879Z"
    />
  </Svg>
);
