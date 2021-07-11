import * as React from 'react';
import {View} from 'react-native';
import {Button, Header, Input, Selector, InputHour} from '../../components';
import {
  Content,
  Container,
  ButtonContainer,
  TimeContainer,
} from './AddTaskScreen.styles';
import {
  deadLineOptions,
  remindOptions,
  repeatOptions,
} from '../../constants/selector';

export const AddTask: React.FC = () => {
  const [title, setTitle] = React.useState('');
  const [deadline, setDeadline] = React.useState('');
  const [remind, setRemind] = React.useState('');
  const [repeat, setRepeat] = React.useState('');
  const [startTime, setStartTime] = React.useState('');
  const [endTime, setEndTime] = React.useState('');

  const createTask = () => {
    const task = {
      title,
      deadLine: deadline,
      startTime,
      endTime,
      remind,
      repeat,
      createdAt: new Date(),
      isFavorite: false,
    };
    console.log(task);
  };

  return (
    <Container>
      <Header />
      <Content bounces={false}>
        <Input
          title={'Title'}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <Selector
          value={deadline}
          setValue={text => setDeadline(text)}
          title="Deadline"
          options={deadLineOptions}
        />
        <TimeContainer>
          <View style={{flex: 1, marginRight: 5}}>
            <InputHour
              value={startTime}
              onChangeText={t => setStartTime(t)}
              title="Start time"
            />
          </View>
          <View style={{flex: 1, marginLeft: 5}}>
            <InputHour
              value={endTime}
              onChangeText={t => setEndTime(t)}
              title="End time"
            />
          </View>
        </TimeContainer>
        <Selector
          value={remind}
          setValue={text => setRemind(text)}
          title="Remind"
          options={remindOptions}
        />
        <Selector
          value={repeat}
          setValue={text => setRepeat(text)}
          title="Repeat"
          options={repeatOptions}
        />
      </Content>
      <ButtonContainer>
        <Button text="Create a task" onPress={createTask} />
      </ButtonContainer>
    </Container>
  );
};
