import {COLORS} from '@assets';
import {ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native';

export interface ITypographyProps {
  children?: ReactNode;
  color?: keyof typeof COLORS;
  style?: StyleProp<TextStyle>;
  variant?:
    | 'title'
    | 'button'
    | 'header'
    | 'detail'
    | 'subtitle'
    | 'section'
    | 'option';
}
