import * as React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
import {Text} from '../Text';
import {Container, SelectorContainer} from './Selector.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import type {SelectorProps} from './Selector.types';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    marginTop: 4,
    marginRight: 5,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.opacity,
    height: '100%',
    width: '100%',
  },
  modalContent: {
    maxWidth: 500,
    width: Dimensions.get('screen').width - 40,
    maxHeight: 600,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  modalHeader: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    borderBottomColor: colors.border,
    borderWidth: 0,
    borderBottomWidth: 2,
  },
  modalInfo: {
    fontWeight: '600',
  },
  scrollView: {paddingBottom: 20},
  option: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.border,
    borderWidth: 0,
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export const Selector: React.FC<SelectorProps> = ({
  value,
  setValue,
  title,
  options,
}) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <Container>
      <Text text={title} style={styles.title} fontSize={15} />
      <SelectorContainer onPress={() => setShowModal(true)}>
        <View style={styles.textContainer}>
          <Text
            text={value}
            style={styles.text}
            fontSize={15}
            color={colors.gray}
            numberOfLines={1}
          />
        </View>
        <Icon name="expand-more" size={24} color={colors.gray} />
      </SelectorContainer>
      <Modal
        visible={showModal}
        transparent
        onRequestClose={() => setShowModal(false)}
        animationType="fade">
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>

          <View style={styles.modalContent}>
            <View style={styles.container}>
              <View style={styles.modalHeader}>
                <Text
                  text={'Select a option'}
                  fontSize={18}
                  color={colors.gray}
                  style={styles.modalInfo}
                />
              </View>
              <ScrollView bounces={false} style={styles.scrollView}>
                {options?.map(data => (
                  <Pressable
                    key={data.id}
                    onPress={() => {
                      setValue(data.text);
                      setShowModal(false);
                    }}
                    style={styles.option}>
                    <Text
                      text={data.text}
                      color={colors.gray}
                      fontSize={16}
                      numberOfLines={1}
                    />
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </Container>
  );
};
