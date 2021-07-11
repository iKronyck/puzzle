import styled from 'styled-components/native';
import type {ThemeProps} from '../../config/types';

export const Container = styled.View<ThemeProps>`
  flex: 1px;
  background-color: ${props => `${props.theme.colors.white}`};
`;

export const TabContainer = styled.View<ThemeProps>`
  height: 50px;
  border-bottom-width: 2px;
  flex-direction: row;
  border-bottom-color: ${props => `${props.theme.colors.border}`};
`;

export const ButtonTab = styled.TouchableOpacity`
  flex: 1px;
  justify-content: center;
  align-items: center;
`;

export const DataContainer = styled.View`
  flex: 1px;
  margin: 5px;
`;

export const Content = styled.View`
  flex: 1px;
  margin: 0 35px 0 35px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  padding: 10px 0 10px 0;
`;
