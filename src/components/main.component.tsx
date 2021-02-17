import { appContainerStyle, buttonStyle, Colors } from '@constants/styles.const';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';


// export or private things can go here (no `useState`!)

const logSomething = () => console.log('Something');

export default function Main() {
  // state management goes here

  return (
    <View style={ styles.container } key="[Main]">
      <Text style={ styles.text }>This is Main.tsx</Text>
      <Button onPress={ ()  => logSomething() } style={ buttonStyle }>Log something</Button>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: appContainerStyle,
  text: { backgroundColor: Colors.cell }
});
