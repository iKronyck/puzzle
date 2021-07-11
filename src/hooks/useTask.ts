import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {TasksProps} from '../context/types';

export const useTask = () => {
  const [tasks, setTasks] = React.useState<Array<TasksProps>>([]);
  const [completedTasks, setCompleted] = React.useState<Array<TasksProps>>([]);
  const [unCompletedTasks, setUnCompleted] = React.useState<Array<TasksProps>>(
    [],
  );
  const [favoriteTasks, setFavorites] = React.useState<Array<TasksProps>>([]);
  const [loading, setLoading] = React.useState(true);

  const getTasks = async () => {
    try {
      const response = await AsyncStorage.getItem('@tasks');
      if (response !== null) {
        const parsedItem: Array<TasksProps> = JSON.parse(response);
        const completed = parsedItem.filter(task => task.isFinished === true);
        const unCompleted = parsedItem.filter(
          task => task.isFinished === false,
        );
        const favorites = parsedItem.filter(task => task.isFavorite === true);
        setTasks(parsedItem);
        setCompleted(completed);
        setUnCompleted(unCompleted);
        setFavorites(favorites);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (task: TasksProps) => {
    setLoading(true);
    try {
      await AsyncStorage.setItem('@tasks', JSON.stringify([...tasks, task]));
      setTasks([...tasks, task]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      getTasks();
    }
  };

  const actionTask = async (id: string, key: 'isFavorite' | 'isFinished') => {
    setLoading(true);
    try {
      let allTasks: Array<TasksProps> = [...tasks];
      const index = allTasks.findIndex(task => task.id === id);
      allTasks[index][key] = !allTasks[index][key];
      const completed = allTasks.filter(task => task.isFinished === true);
      const unCompleted = allTasks.filter(task => task.isFinished === false);
      const favorites = allTasks.filter(task => task.isFavorite === true);
      await AsyncStorage.setItem('@tasks', JSON.stringify(allTasks));
      setTasks([...allTasks]);
      setCompleted(completed);
      setUnCompleted(unCompleted);
      setFavorites(favorites);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getTasks();
  }, []);

  return {
    addTask,
    completedTasks,
    unCompletedTasks,
    favoriteTasks,
    actionTask,
    loading,
    tasks,
  };
};
