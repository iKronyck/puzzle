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
      if (response && response.length > 0) {
        console.log('yep');
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async () => {
    setLoading(true);
    const preTask = {
      title: 'Design',
      deadLine: '2021-10-02',
      startTime: '11 AM',
      endTime: '14:00 PM',
      remind: '10 minutes early',
      repeat: 'Weakly',
      createdAt: new Date(),
      isFavorite: false,
    };
    try {
      await AsyncStorage.setItem('@tasks', JSON.stringify(preTask));
      setTasks([...tasks, preTask]);
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
