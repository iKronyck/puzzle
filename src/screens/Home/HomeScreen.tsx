import * as React from 'react';
import {FlatList, Dimensions, ActivityIndicator} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {withBouncing} from 'react-native-redash';
import {Button, Header, TaskItem, Text} from '../../components';
import {useAppContext} from '../../hooks/useAppContext';
import {
  Container,
  ButtonTab,
  DataContainer,
  TabContainer,
  Content,
  ButtonContainer,
} from './HomeScreen.styles';
import type {HomeProps} from './HomeScreen.types';

import colors from '../../constants/colors';

export const Home: React.FC<HomeProps> = ({navigation}) => {
  const [tabActive, setTabActive] = React.useState(0);
  const {tasks, completedTasks, unCompletedTasks, favoriteTasks, loading} =
    useAppContext();
  const translateX = useSharedValue(0);

  const {width} = Dimensions.get('screen');

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width / 4,
      backgroundColor: colors.black,
      height: 3,
      position: 'absolute',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      bottom: 0,
      transform: [{translateX: translateX.value}],
    };
  });

  const moveToTab = (numberTab: number) => {
    const tabSize = width / 4;
    translateX.value = withBouncing(withSpring(tabSize * numberTab), 0, width);
    setTabActive(numberTab);
  };

  return (
    <Container>
      <Header isHome />
      <TabContainer>
        <ButtonTab onPress={() => moveToTab(0)}>
          <Text
            numberOfLines={1}
            text="All"
            fontSize={14}
            color={colors.gray}
          />
        </ButtonTab>
        <ButtonTab onPress={() => moveToTab(1)}>
          <Text
            numberOfLines={1}
            text="Completed"
            fontSize={14}
            color={colors.gray}
          />
        </ButtonTab>
        <ButtonTab onPress={() => moveToTab(2)}>
          <Text
            numberOfLines={1}
            text="Uncompleted"
            fontSize={14}
            color={colors.gray}
          />
        </ButtonTab>
        <ButtonTab onPress={() => moveToTab(3)}>
          <Text
            numberOfLines={1}
            text="Favorite"
            fontSize={14}
            color={colors.gray}
          />
        </ButtonTab>
        <Animated.View style={animatedStyle} />
      </TabContainer>
      <DataContainer>
        <Content>
          {tasks && tabActive === 0 && !loading ? (
            <FlatList
              bounces={false}
              data={tasks}
              renderItem={({item}) => <TaskItem task={item} />}
              extraData={true}
            />
          ) : null}
          {completedTasks && tabActive === 1 && !loading ? (
            <FlatList
              bounces={false}
              data={completedTasks}
              renderItem={({item}) => <TaskItem task={item} />}
              extraData={true}
              automaticallyAdjustContentInsets={false}
            />
          ) : null}
          {unCompletedTasks && tabActive === 2 && !loading ? (
            <FlatList
              bounces={false}
              data={unCompletedTasks}
              renderItem={({item}) => <TaskItem task={item} />}
              extraData={true}
            />
          ) : null}
          {favoriteTasks && tabActive === 3 && !loading ? (
            <FlatList
              bounces={false}
              data={favoriteTasks}
              renderItem={({item}) => <TaskItem task={item} />}
              extraData={true}
            />
          ) : null}
          {loading ? (
            <ActivityIndicator size="large" color={colors.border} />
          ) : null}
        </Content>
        <ButtonContainer>
          <Button
            text="Add a task"
            onPress={() => navigation.navigate('AddTask')}
            color={colors.white}
          />
        </ButtonContainer>
      </DataContainer>
    </Container>
  );
};
