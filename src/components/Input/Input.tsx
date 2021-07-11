import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../Text';
import {InputContainer, StyledInput} from './Input.styles';
import type {InputProps} from './Input.types';

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
  },
});

export const Input: React.FC<InputProps> = ({
  title,
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <View>
      <Text text={title} style={styles.text} fontSize={15} />
      <InputContainer>
        <StyledInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </InputContainer>
    </View>
  );
};
