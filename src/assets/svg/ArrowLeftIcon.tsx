import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ArrowLeftIcon = (props: SvgProps) => {
  return (
    <Svg width={14} height={22} viewBox="0 0 14 22" fill="none" {...props}>
      <Path
        d="M10.702 21.414c.269.26.593.408.983.408.789 0 1.41-.621 1.41-1.4 0-.39-.158-.743-.436-1.021l-8.405-8.108 8.405-8.1c.278-.278.436-.64.436-1.02 0-.78-.621-1.401-1.41-1.401-.39 0-.705.14-.983.408l-9.296 8.99c-.334.325-.51.696-.51 1.132 0 .427.166.78.51 1.122l9.296 8.99z"
        fill="#007AFF"
      />
    </Svg>
  );
};
