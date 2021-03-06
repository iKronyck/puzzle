import styled from 'styled-components/native';
import type {ThemeProps} from '../../config/types';

export const Container = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${props => `${props.theme.colors.white}`};
`;

export const Content = styled.ScrollView`
  padding: 20px 35px 0 35px;
  flex: 1px;
`;

export const TimeContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const TimeInputContainer = styled.View<{isLeft?: boolean}>`
  margin-left: ${props => `${!props.isLeft ? 5 : 0}px`};
  margin-right: ${props => `${props.isLeft ? 5 : 0}px`};
  flex: 1px;
`;

export const ButtonContainer = styled.View`
  padding: 10px 0 10px 0;
  align-items: center;
`;

export const LastFieldContainer = styled.View`
  margin-bottom: 20px;
`;
