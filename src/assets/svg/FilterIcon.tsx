import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {COLORS} from '../colors';

export const FilterIcon = ({fill = COLORS.WHITE, ...rest}: SvgProps) => {
  return (
    <Svg width={21} height={14} viewBox="0 0 21 14" fill="none" {...rest}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0v2.333h21V0H0zm8.167 14h4.666v-2.333H8.167V14zM17.5 8.167h-14V5.833h14v2.334z"
        fill={fill}
      />
    </Svg>
  );
};
