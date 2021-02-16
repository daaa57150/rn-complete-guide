import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ViewStyle, TextStyle, TextInput, StyleProp, ScrollView, FlatList } from 'react-native';
import { Colors, appContainerStyle, inputStyle, buttonStyle, listItemStyle } from './constants/styles.const';
import _ from 'lodash-es';
import { Keyable, keyable, KeyablePrimitive } from '@helpers/keyable';
import GoalItem from '@components/goal-item.component';
import GoalInput from '@components/goal-input.component';

// Should go in the domain
type Goal = KeyablePrimitive<string>;

// private tool
const newGoal = (value: string): Goal => keyable(value);

export default function App() {
  const [goals, setGoals] = useState([] as Goal[]);
  
  const addGoal = (text: string): void => {
    const goal = newGoal(text);
    setGoals(goals => [...goals, goal]);
  }; 

  const removeGoal = (goal: Goal): void => {
    setGoals(goals => _.reject(goals, { key: goal.key }));
  }

  return (
    <View style={ styles.container }>
       {/* Add input */}
      <GoalInput onAddGoal={ addGoal }/>

      {/* List of goals */}
      <FlatList data={ goals } renderItem={ itemInfo => (
        <GoalItem text={ itemInfo.item.value } onDelete={ () => removeGoal(itemInfo.item) }/>
      )}/>

      <StatusBar style="auto" />
    </View>
  );
};

// interface Styles {
//   container: ViewStyle;
//   inputContainer: ViewStyle,
//   input: TextStyle,
//   button: TextStyle,
//   listItem: ViewStyle
// };

const styles = StyleSheet.create({
  container: appContainerStyle,
  button: { ...buttonStyle, flex: 1, marginLeft: 10 },
});
