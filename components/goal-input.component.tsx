import { StyleSheet, TextInput, View } from "react-native";

import React, { useState } from 'react';
import { inputStyle, buttonStyle } from "constants/styles.const";
// https://www.npmjs.com/package/react-native-button
import Button from "react-native-button";

export interface GoalInputProps {
  onAddGoal: (text: string) => void
};

export default function GoalInput(props: GoalInputProps) {

  const [enteredGoal, setEnteredGoal] = useState('Caca');
  const onChangeGoal = (text: string) => {
    setEnteredGoal(text);
  };
  // const addGoal = () => {
  //   // const goal = newGoal(enteredGoal);
  //   // setGoals(goals => [...goals, goal]);
  // }; 
  
  const onAddGoal = () => props.onAddGoal(enteredGoal);

  return (
    <View style={{ flexDirection: 'row' }}>
        <TextInput 
          style={ styles.input } 
          placeholder="Course goal" 
          onChangeText={ onChangeGoal } 
          value={ enteredGoal }>
        </TextInput>

        {/* <Button>Add</Button> */}
        <Button onPress={ onAddGoal } style={ styles.button } >ADD</Button>
      </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: { flexDirection: 'row' },
  input: { ...inputStyle, flex: 4 },
  button: { ...buttonStyle, flex: 1, marginLeft: 10 },
});

