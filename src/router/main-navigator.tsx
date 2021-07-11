import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, AddTask} from '../screens';
import type {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

export function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: {backgroundColor: 'transparent'},
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddTask" component={AddTask} />
    </Stack.Navigator>
  );
}

const exitRoutes = ['Home'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
