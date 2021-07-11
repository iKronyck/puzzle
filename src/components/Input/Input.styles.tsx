import styled from 'styled-components/native';
import {Platform} from 'react-native';
import type {ThemeProps} from '../../config/types';

const isIOS = Platform.OS === 'ios';

export const InputContainer = styled.View<ThemeProps>`
  border-radius: 8px;
  background-color: ${props => `${props.theme.colors.backgroundGray}`};
  padding: ${() => `${isIOS ? 15 : 3}px`};
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 10px;
`;

export const StyledInput = styled.TextInput<ThemeProps>`
  color: ${props => `${props.theme.colors.gray}`};
  font-size: 15px;
`;
