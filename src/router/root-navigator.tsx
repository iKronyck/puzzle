import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {MainNavigator} from './main-navigator';
import type {RootParamList} from './types';

const Stack = createStackNavigator<RootParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="mainStack"
        component={MainNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  );
});

RootNavigator.displayName = 'RootNavigator';
