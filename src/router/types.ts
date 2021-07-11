import type {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  AddTask: undefined;
};

export type RootParamList = {
  mainStack: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type AddTaskScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddTask'
>;
