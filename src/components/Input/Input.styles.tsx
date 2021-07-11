import styled from 'styled-components/native';
import type {ThemeProps} from '../../config/types';

export const InputContainer = styled.View<ThemeProps>`
  border-radius: 8px;
  background-color: ${props => `${props.theme.colors.backgroundGray}`};
  padding: 15px;
  margin-top: 10px;
`;

export const StyledInput = styled.TextInput<ThemeProps>`
  color: ${props => `${props.theme.colors.gray}`};
  font-size: 15px;
`;
