import styled from 'styled-components/native';
import type {PressableProps} from 'react-native';
import type {Theme} from '../../config/types';

interface StyledButton extends PressableProps {
  theme: Theme;
}

export const StyledButton = styled.Pressable<StyledButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => `${props.theme.colors.green}`};
  width: 80%;
  height: 40px;
  border-radius: 10px;
`;
