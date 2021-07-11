import * as React from 'react';
import {StyleSheet} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';
import {AppContext} from './context/AppContext';
import {RootNavigator} from './router';
import theme from './config/theme';
import {useTask} from './hooks/useTask';

const style = StyleSheet.create({
  content: {flex: 1},
});

const App: React.FC = () => {
  const {tasks, loading, addTask} = useTask();
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={{tasks, loading, addTask}}>
          <SafeAreaView style={style.content}>
            <RootNavigator />
          </SafeAreaView>
        </AppContext.Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
