import * as React from 'react';
import {Button, Header, Input, Selector, InputHour} from '../../components';
import {
  Content,
  Container,
  ButtonContainer,
  TimeContainer,
  TimeInputContainer,
} from './AddTaskScreen.styles';
import {
  deadLineOptions,
  remindOptions,
  repeatOptions,
} from '../../constants/selector';
import {useAppContext} from '../../hooks/useAppContext';
import {generateGuid} from '../../utils/guid';
import colors from 'constants/colors';

export const AddTask: React.FC = () => {
  const [title, setTitle] = React.useState('');
  const [deadline, setDeadline] = React.useState('');
  const [remind, setRemind] = React.useState('');
  const [repeat, setRepeat] = React.useState('');
  const [startTime, setStartTime] = React.useState('');
  const [endTime, setEndTime] = React.useState('');

  const {addTask} = useAppContext();

  const createTask = () => {
    const task = {
      id: generateGuid(),
      title,
      deadLine: deadline,
      startTime,
      endTime,
      remind,
      repeat,
      createdAt: new Date(),
      isFavorite: false,
      isFinished: false,
    };
    addTask(task);
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
          <TimeInputContainer isLeft>
            <InputHour
              value={startTime}
              onChangeText={t => setStartTime(t)}
              title="Start time"
            />
          </TimeInputContainer>
          <TimeInputContainer>
            <InputHour
              value={endTime}
              onChangeText={t => setEndTime(t)}
              title="End time"
            />
          </TimeInputContainer>
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
        <Button
          text="Create a task"
          onPress={createTask}
          color={colors.white}
        />
      </ButtonContainer>
    </Container>
  );
};
