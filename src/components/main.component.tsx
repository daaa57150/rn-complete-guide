import { appContainerStyle, Colors } from '@constants/styles.const';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './header.component';
import StartPage from './pages/start-page.component';


// export or private things can go here (no `useState`!)

const logSomething = () => {
  console.log('Something');
}

export default function Main() {
  // state management goes here

  return (
    <View style={ styles.main } key="[Main]">
      <Header title="Guess a  number"/>
      <View key="[Content]" style={ styles.content }>
{/*
        <Text style={ styles.text }>This is Main.tsx</Text>
        <Button onPress={ ()  => logSomething() } style={ buttonStyle }>Log something</Button> */}
        <StartPage></StartPage>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  main: appContainerStyle,
  text: { backgroundColor: Colors.cell },
  content: { backgroundColor: 'green', flex: 1, width: '100%' }
});
