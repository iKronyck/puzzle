import {createContext} from 'react';
import type {TasksProps} from './types';

type TypeAppContext = {
  tasks: Array<TasksProps>;
  completedTasks: Array<TasksProps>;
  unCompletedTasks: Array<TasksProps>;
  favoriteTasks: Array<TasksProps>;
  loading: boolean;
  addTask: (task: TasksProps) => void;
  actionTask: (id: string, key: 'isFavorite' | 'isFinished') => void;
};

export const AppContext = createContext<TypeAppContext>({
  tasks: [],
  loading: false,
  addTask: () => {},
  actionTask: () => {},
  completedTasks: [],
  unCompletedTasks: [],
  favoriteTasks: [],
});
