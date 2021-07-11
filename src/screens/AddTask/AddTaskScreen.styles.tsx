import styled from 'styled-components/native';
import type {ThemeProps} from '../../config/types';

export const Container = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${props => `${props.theme.colors.white}`};
`;

export const Content = styled.ScrollView`
  padding: 20px 35px 0 35px;
  display: flex;
  flex: 1px;
`;

export const TimeContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const ButtonContainer = styled.View`
  padding: 10px 0 10px 0;
  align-items: center;
`;
