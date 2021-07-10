import styled from 'styled-components/native';
import type {StyledTextProps} from './Text.types';

export const StyledText = styled.Text<Omit<StyledTextProps, 'text'>>`
  color: ${props => `${props.color}`};
  font-size: ${props => `${props.fontSize}px`};
`;
