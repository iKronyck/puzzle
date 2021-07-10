import * as React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconOther from 'react-native-vector-icons/Ionicons';
import {StyledContainer} from './Header.styles';
import type {HeaderPros} from './Header.types';
import {Text} from '../Text';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
    color: colors.gray,
  },
  boardText: {
    fontWeight: 'bold',
  },
  taskText: {
    marginLeft: 15,
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    padding: 5,
  },
});

export const Header: React.FC<HeaderPros> = ({isHome, goBack}) => {
  return (
    <StyledContainer>
      {isHome ? (
        <>
          <View style={styles.container}>
            <Text
              text="Board"
              color={colors.black}
              fontSize={20}
              style={styles.boardText}
            />
          </View>
          <View style={[styles.container, styles.iconContainer]}>
            <Icon name="search" size={22} style={styles.icon} />
            <IconOther
              name="notifications-outline"
              size={20}
              style={styles.icon}
            />
            <Icon name="menu" size={22} style={styles.icon} />
          </View>
        </>
      ) : (
        <View style={[styles.container, styles.taskContainer]}>
          <Pressable onPress={goBack} style={styles.button}>
            <Icon name="arrow-back-ios" size={15} color={colors.gray} />
          </Pressable>
          <Text
            text="Add task"
            color={colors.black}
            style={styles.taskText}
            fontSize={18}
          />
        </View>
      )}
    </StyledContainer>
  );
};
