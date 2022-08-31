import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const CloseIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="#000" {...props}>
    <Path
      d="M3 21 21 3M21 21 3 3"
      stroke={props.fill}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
