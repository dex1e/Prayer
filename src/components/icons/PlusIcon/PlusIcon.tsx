import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const PlusIcon = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="#72A8BC" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 1a1 1 0 1 0-2 0v6H1a1 1 0 0 0 0 2h6v6a1 1 0 1 0 2 0V9h6a1 1 0 1 0 0-2H9V1Z"
    />
  </Svg>
);
