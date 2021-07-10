import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens';
import type {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: 'transparent'},
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const exitRoutes = ['Home'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
