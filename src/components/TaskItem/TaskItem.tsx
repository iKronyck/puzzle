import * as React from 'react';
import {StyleSheet, Touchable, TouchableOpacity} from 'react-native';
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
    flex: 1,
  },
});

export const TaskItem: React.FC<TaskItemProps> = ({task}) => {
  const {actionTask} = useAppContext();
  return (
    <Container>
      <CheckBox onPress={() => actionTask(task.id, 'isFinished')}>
        {task.isFinished ? (
          <Icon name="done" size={16} color={colors.white} />
        ) : (
          <UnSelected />
        )}
      </CheckBox>
      <Text text={task.title} style={styles.title} numberOfLines={1} />
      <TouchableOpacity onPress={() => actionTask(task.id, 'isFavorite')}>
        <Icon
          name={task.isFavorite ? 'favorite' : 'favorite-border'}
          color={colors.red}
          size={22}
        />
      </TouchableOpacity>
    </Container>
  );
};
