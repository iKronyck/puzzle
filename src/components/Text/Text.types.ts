import type {TextStyle} from 'react-native';
import type {Theme} from '../../config/types';

export interface TextProps {
  text: string;
  color?: string;
  style?: TextStyle;
  fontSize?: number;
}

export interface StyledTextProps extends TextProps {
  theme: Theme;
}
