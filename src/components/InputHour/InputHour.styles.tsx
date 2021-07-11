import styled from 'styled-components/native';
import type {ThemeProps} from '../../config/types';

export const Container = styled.View`
  padding-top: 25px;
`;

export const InputContainer = styled.View<ThemeProps>`
  border-radius: 8px;
  background-color: ${props => `${props.theme.colors.backgroundGray}`};
  padding: 15px;
  margin-top: 10px;
  flex-direction: row;
`;

export const StyledInput = styled.TextInput<ThemeProps>`
  color: ${props => `${props.theme.colors.gray}`};
  font-size: 15px;
  flex: 1px;
`;
