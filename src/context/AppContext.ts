import {createContext} from 'react';
import type {TasksProps} from './types';

type TypeAppContext = {
  tasks: Array<TasksProps>;
  loading: boolean;
  addTask: (task: TasksProps) => void;
  actionTask: (id: string) => void;
};

export const AppContext = createContext<TypeAppContext>({
  tasks: [],
  loading: false,
  addTask: () => {},
  actionTask: () => {},
});
