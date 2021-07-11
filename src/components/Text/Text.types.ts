import type {TextStyle, TextProps as TextProp} from 'react-native';
import type {Theme} from '../../config/types';

export interface TextProps extends TextProp {
  text: string;
  color?: string;
  style?: TextStyle;
  fontSize?: number;
}

export interface StyledTextProps extends TextProps {
  theme: Theme;
}
