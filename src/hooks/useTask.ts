import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface TasksProps {
  title: string;
  deadLine: string;
  startTime: string;
  endTime: string;
  remind: string;
  repeat: string;
  isFavorite: boolean;
  createdAt: Date;
}

export const useTask = () => {
  const [tasks, setTasks] = React.useState<Array<TasksProps>>([]);
  const [loading, setLoading] = React.useState(true);

  const getTasks = async () => {
    try {
      const response = await AsyncStorage.getItem('@tasks');
      console.log(response, 'RESPONSE');
      if (response && response.length > 0) {
        console.log('yep');
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
      await AsyncStorage.setItem('@tasks', JSON.stringify(task));
      setTasks([...tasks, task]);
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
    loading,
    tasks,
  };
};
