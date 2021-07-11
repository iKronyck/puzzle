import * as React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CheckBox, Container, UnSelected} from './TaskItem.styles';
import {Text} from '../Text';
import colors from '../../constants/colors';
import type {TaskItemProps} from './TaskItem.types';
import {useAppContext} from '../../hooks/useAppContext';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: colors.gray,
    marginLeft: 10,
    fontSize: 14,
  },
});

export const TaskItem: React.FC<TaskItemProps> = ({task}) => {
  const {actionTask} = useAppContext();
  return (
    <Container>
      <CheckBox onPress={() => actionTask(task.id)}>
        {task.isFinished ? (
          <Icon name="done" size={16} color={colors.white} />
        ) : (
          <UnSelected />
        )}
      </CheckBox>
      <Text text={task.title} style={styles.title} numberOfLines={1} />
    </Container>
  );
};
