import type colors from '../constants/colors';

export type Theme = {
  colors: typeof colors;
};

export interface ThemeProps {
  theme: Theme;
}
