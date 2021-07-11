import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '../Text';
import {Container, InputContainer, StyledInput} from './InputHour.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import type {InputHourProps} from './InputHour.types';

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
  },
});

export const InputHour: React.FC<InputHourProps> = ({
  title,
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <Container>
      <Text text={title} style={styles.text} fontSize={15} />
      <InputContainer>
        <StyledInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
        <Icon name="schedule" size={16} color={colors.gray} />
      </InputContainer>
    </Container>
  );
};
