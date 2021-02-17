import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ViewStyle, TextStyle, TextInput, StyleProp, ScrollView, FlatList } from 'react-native';
import { Colors, appContainerStyle, inputStyle, buttonStyle, listItemStyle } from './constants/styles.const';
import _ from 'lodash-es';
import { Keyable, keyable, KeyablePrimitive } from '@helpers/keyable';
import GoalItem from '@components/goal-item.component';
import GoalInput from '@components/add-goal-modal.component';
import Button from 'react-native-button';

// Should go in the domain
type Goal = KeyablePrimitive<string>;

// private tool
const newGoal = (value: string): Goal => keyable(value);

export default function App() {
  const [goals, setGoals] = useState([] as Goal[]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const addGoal = (text: string): void => {
    const goal = newGoal(text);
    setGoals(goals => [...goals, goal]);
    dismissModal();
  }; 

  const removeGoal = (goal: Goal): void => {
    setGoals(goals => _.reject(goals, { key: goal.key }));
  }

  const showModal = () => setIsModalVisible(true);
  const dismissModal = () => setIsModalVisible(false);

  return (
    <View style={ styles.container } key="[App]">
      {/* Show the modal */}
      <Button style={ styles.button } onPress={ showModal } key="AddGoal">Add a new goal...</Button>

       {/* Input modal directly here ? */}
      <GoalInput visible={ isModalVisible } onAddGoal={ addGoal } onCancel={ dismissModal }/>

      {/* List of goals */}
      <FlatList data={ goals } renderItem={ itemInfo => (
        <GoalItem text={ itemInfo.item.value } onDelete={ () => removeGoal(itemInfo.item) }/>
      )}/>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: appContainerStyle,
  button: { ...buttonStyle, marginBottom: 20},
});
