import styled from 'styled-components/native';
import {Platform} from 'react-native';
import type {ThemeProps} from '../../config/types';

const isIOS = Platform.OS === 'ios';

export const Container = styled.View`
  padding-top: 25px;
`;

export const InputContainer = styled.View<ThemeProps>`
  border-radius: 8px;
  background-color: ${props => `${props.theme.colors.backgroundGray}`};
  padding: ${() => `${isIOS ? 15 : 3}px`};
  padding-left: ${() => `${isIOS ? 15 : 8}px`};
  padding-right: ${() => `${isIOS ? 15 : 15}px`};
  margin-top: 10px;
  align-items: center;
  flex-direction: row;
`;

export const StyledInput = styled.TextInput<ThemeProps>`
  color: ${props => `${props.theme.colors.gray}`};
  font-size: 15px;
  flex: 1px;
`;
