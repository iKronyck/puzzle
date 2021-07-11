import {createContext} from 'react';

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

type TypeAppContext = {
  tasks: Array<TasksProps>;
  loading: boolean;
  addTask: () => void;
};

export const AppContext = createContext<TypeAppContext>({
  tasks: [],
  loading: false,
  addTask: () => {},
});
