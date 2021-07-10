import type {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
};

export type RootParamList = {
  mainStack: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
