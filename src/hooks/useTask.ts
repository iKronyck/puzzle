import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {TasksProps} from '../context/types';

export const useTask = () => {
  const [tasks, setTasks] = React.useState<Array<TasksProps>>([]);
  const [loading, setLoading] = React.useState(true);

  const getTasks = async () => {
    try {
      const response = await AsyncStorage.getItem('@tasks');
      if (response !== null) {
        const parsedItem = JSON.parse(response);
        setTasks(parsedItem);
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
    }
  };

  const actionTask = async (id: string) => {
    setLoading(true);
    try {
      let allTasks = [...tasks];
      const index = allTasks.findIndex(task => task.id === id);
      allTasks[index].isFinished = !allTasks[index].isFinished;
      setTasks([...allTasks]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const unCompleteTask = async () => {
    setLoading(true);
    try {
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
    actionTask,
    unCompleteTask,
    loading,
    tasks,
  };
};
