import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ViewStyle, TextStyle, TextInput, StyleProp, ScrollView, FlatList } from 'react-native';
import { Colors, appContainerStyle, inputStyle, buttonStyle, listItemStyle } from './constants/styles.const';
// import Button from 'react-native-button';

// https://www.npmjs.com/package/react-native-button
import Button from 'react-native-button';
import { Keyable, keyable, KeyablePrimitive } from '@helpers/keyable';


// interface Styles {
//   container: ViewStyle;
//   inputContainer: ViewStyle,
//   input: TextStyle,
//   button: TextStyle,
//   listItem: ViewStyle
// };

const styles = StyleSheet.create({
  container: appContainerStyle,
  inputContainer: { flexDirection: 'row' },
  input: { ...inputStyle, flex: 4 },
  button: { ...buttonStyle, flex: 1, marginLeft: 10 },
  // buttonContainer: buttonContainerStyle,
  listItem: listItemStyle
});

type Goal = KeyablePrimitive<string>;
const newGoal = (value: string): Goal => keyable(value);

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('Caca');
  const [goals, setGoals] = useState([] as Goal[]);
  
  const onChangeGoal = (text: string) => {
    setEnteredGoal(text);
  };

  const addGoal = () => {
    const goal = newGoal(enteredGoal);
    setGoals(goals => [...goals, goal]);
  }; 

  return (
    <View style={ styles.container }>
       {/* Add input */}
      <View style={{ flexDirection: 'row' }}>
        <TextInput 
          style={ styles.input } 
          placeholder="Course goal" 
          onChangeText={ onChangeGoal } 
          value={ enteredGoal }>
        </TextInput>

        {/* <Button>Add</Button> */}
        <Button onPress={ addGoal } style={ styles.button } >ADDp</Button>
      </View>

      {/* List of goals */}
      {/* <ScrollView>{ 
          goals.map((goal, index) => (
            <View key={ index } style={ styles.listItem }>
              <Text>{ `Goals: ${goal}` }</Text>
            </View>
          ))
      }</ScrollView> */}
      <FlatList data={ goals } renderItem={ info => (
        <View style={ styles.listItem }>
        <Text>{ `${info.item.value} [${info.item.key}]` }</Text>
      </View>
      )}/>

      <StatusBar style="auto" />
    </View>
  );
}
