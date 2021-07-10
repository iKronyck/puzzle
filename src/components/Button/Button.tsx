import * as React from 'react';
import {StyledButton} from './Button.styles';
import {Text} from '../Text';

export const Button: React.FC = () => {
  return (
    <StyledButton>
      <Text text="Create a task" />
    </StyledButton>
  );
};
