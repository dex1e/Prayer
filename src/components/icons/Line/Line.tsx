import * as React from 'react';
import Svg, {SvgProps, Mask, Rect, G, Path} from 'react-native-svg';

export const Line = (props: SvgProps) => (
  <Svg width={3} height={23} viewBox="0 0 3 23" fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={0} y={0} width={3} height={23}>
      <Rect y={0.938} width={3} height={22} rx={1.5} fill="#C4C4C4" />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#72A8BC" d="M-12-.063h24v24h-24z" />
    </G>
  </Svg>
);
