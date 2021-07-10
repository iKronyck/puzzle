import * as React from 'react';
import {StyleSheet} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';
import {RootNavigator} from './router';
import theme from './config/theme';

const style = StyleSheet.create({
  content: {flex: 1},
});

const App: React.FC = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView style={style.content}>
        <ThemeProvider theme={theme}>
          <RootNavigator />
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
