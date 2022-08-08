import {ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native';

export interface ITypographyProps {
  children?: ReactNode;
  color?: string;
  style?: StyleProp<TextStyle>;
  variant?:
    | 'title'
    | 'button'
    | 'header'
    | 'detail'
    | 'subtitle'
    | 'section'
    | 'option'
    | 'h1'
    | 'h2';
}
