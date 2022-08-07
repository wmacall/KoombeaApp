import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ArrowIcon = (props: SvgProps) => {
  return (
    <Svg width={19} height={18} viewBox="0 0 19 18" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.586 10H0V8h14.586L8.293 1.707 9.707.293 18.414 9l-8.707 8.707-1.414-1.414L14.586 10z"
        fill="#1A90F0"
      />
    </Svg>
  );
};
