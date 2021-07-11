import * as React from 'react';
import type {TextProps} from './Text.types';
import {StyledText} from './Text.styles';
import colors from '../../constants/colors';

export const Text: React.FC<TextProps> = ({
  text,
  style = {},
  fontSize = 12,
  color = colors.black,
}) => {
  return (
    <StyledText color={color} fontSize={fontSize} style={style}>
      {text}
    </StyledText>
  );
};
