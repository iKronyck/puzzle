import * as React from 'react';
import type {TextProps} from './Text.types';
import {StyledText} from './Text.styles';

export const Text: React.FC<TextProps> = ({
  text,
  style = {},
  fontSize = 12,
  color = '#FFF',
}) => {
  return (
    <StyledText color={color} fontSize={fontSize} style={style}>
      {text}
    </StyledText>
  );
};
