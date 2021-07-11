import * as React from 'react';
import {StyledButton} from './Button.styles';
import {Text} from '../Text';

import type {ButtonProps} from './Button.types';

export const Button: React.FC<ButtonProps> = ({text, onPress}) => {
  return (
    <StyledButton onPress={onPress}>
      <Text text={text} />
    </StyledButton>
  );
};
