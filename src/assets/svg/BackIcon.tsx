import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const BackIcon = (props: SvgProps) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 7H3.8l5.6-5.6L8 0 0 8l8 8 1.4-1.4L3.8 9H16V7z"
        fill="#fff"
      />
    </Svg>
  );
};
