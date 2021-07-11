import styled from 'styled-components/native';
import type {ThemeProps} from '../../config/types';

export const Container = styled.View`
  padding-top: 25px;
`;

export const SelectorContainer = styled.Pressable<ThemeProps>`
  border-radius: 8px;
  background-color: ${props => `${props.theme.colors.backgroundGray}`};
  padding: 15px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
