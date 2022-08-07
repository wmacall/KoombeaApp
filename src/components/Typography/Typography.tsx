import React, {FC, useCallback} from 'react';
import {Text} from 'react-native';
import {ITypographyProps} from './Typography.types';
import styles from './Typography.styles';

export const Typography: FC<ITypographyProps> = ({
  children,
  style,
  color,
  variant,
}) => {
  const onGetStyle = useCallback(() => {
    switch (variant) {
      case 'title':
        return styles.title;
      case 'button':
        return styles.button;
      case 'header':
        return styles.header;
      case 'detail':
        return styles.detail;
      case 'subtitle':
        return styles.subtitle;
      case 'section':
        return styles.section;
      case 'option':
        return styles.option;
      default:
        return styles.default;
    }
  }, [variant]);

  return <Text style={[onGetStyle(), {color}, style]}>{children}</Text>;
};
