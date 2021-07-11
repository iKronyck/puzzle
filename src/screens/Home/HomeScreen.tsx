import * as React from 'react';
import {View} from 'react-native';
import {Button, Header} from '../../components';
import type {HomeProps} from './HomeScreen.types';

export const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <Header isHome />
      <View style={{flex: 1, margin: 5}}>
        <View style={{flex: 1}} />
        <View style={{alignItems: 'center', paddingVertical: 10}}>
          <Button
            text="Add a task"
            onPress={() => navigation.navigate('AddTask')}
          />
        </View>
      </View>
    </View>
  );
};
