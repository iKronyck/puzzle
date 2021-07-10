import styled from 'styled-components/native';
import type {ViewProps} from 'react-native';
import type {Theme} from '../../config/types';

interface StyledHeaderHome extends ViewProps {
  theme: Theme;
}

export const StyledContainer = styled.View<StyledHeaderHome>`
  background-color: ${props => `${props.theme.colors.white}`};
  border-color: ${props => `${props.theme.colors.border}`};
  border-bottom-width: 2px;
  padding: 0 35px 0 35px;
  justify-content: center;
  flex-direction: row;
  display: flex;
  height: 60px;
  width: 100%;
`;
