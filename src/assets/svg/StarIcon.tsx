import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {COLORS} from 'assets/colors';

export const StarIcon = ({
  fill = COLORS.DUSTY_GRAY,
  width = 20,
  height = 21,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 21" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 17.11l-6.165 3.37 1.178-7.139L.025 8.286l6.893-1.042L10 .75l3.082 6.495 6.892 1.042-4.987 5.055 1.178 7.139L10 17.11z"
        fill={fill}
      />
    </Svg>
  );
};
