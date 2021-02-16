import { Modal, StyleSheet, TextInput, View } from "react-native";

import React, { useState } from 'react';
import { inputStyle, buttonStyle, buttonStyleCancel } from "constants/styles.const";
// https://www.npmjs.com/package/react-native-button
import Button from "react-native-button";

export interface GoalInputProps {
  // Inputs
  visible: boolean,
  // Outputs
  onAddGoal: (text: string) => void,
  onCancel: () => void,
};

export default function GoalInput(props: GoalInputProps) {

  const [enteredGoal, setEnteredGoal] = useState('Caca');
  
  const onAddGoal = () => props.onAddGoal(enteredGoal);
  const onCancel = () => props.onCancel();

  return (
    <Modal visible={ props.visible } animationType={ 'slide' }>
      <View style={ styles.container }>
          <TextInput 
            style={ styles.input } 
            placeholder="Course goal" 
            onChangeText={ text => setEnteredGoal(text) } 
            value={ enteredGoal }>
          </TextInput>

          <View style={ styles.buttons }>
            <Button onPress={ onCancel } style={ buttonStyleCancel } containerStyle={ styles.buttonContainer }>Cancel</Button>
            <Button onPress={ onAddGoal } style={ buttonStyle } containerStyle={ styles.buttonContainer }>ADD</Button>
          </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'column', flex: 1, justifyContent: 'center', alignContent: 'center', padding: 20 },
  input: { ...inputStyle },
  buttons: { flexDirection: 'row', justifyContent:'space-between' },
  // buttonAdd: { ...buttonStyle },
  // buttonCancel: { ...buttonStyleCancel },
  buttonContainer: { width: '40%' },
});

