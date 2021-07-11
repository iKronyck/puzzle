import styled from 'styled-components/native';
import type {ThemeProps} from '../../config/types';

export const Container = styled.View`
  display: flex;
  flex: 1px;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 10px 0;
`;

export const CheckBox = styled.Pressable<ThemeProps>`
  width: 30px;
  height: 30px;
  background-color: ${props => `${props.theme.colors.blue}`};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const UnSelected = styled.View<ThemeProps>`
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background-color: ${props => `${props.theme.colors.white}`};
  justify-content: center;
  align-items: center;
`;
