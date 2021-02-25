import { appContainerStyle, Colors } from '@constants/styles.const';
import { StatusBar } from 'expo-status-bar';
import _ from 'lodash-es';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RenderIf from './common/render-if.component';
import Header from './header.component';
import GamePage from './pages/game-page.component';
import StartPage from './pages/start-page.component';

// export or private things can go here (no `useState`!)

const logSomething = () => {
  console.log('Something');
}

export default function Main() {
  // state management goes here
  const [enteredNumber, setEnteredNumber] = useState<number>();

  const startGameWithNumber = (enteredNumber: number) => {
    setEnteredNumber(enteredNumber);
  };

  return (
    <View style={ styles.main } key="[Main]">
      <Header title="Guess a  number"/>
      <View key="[Content]" style={ styles.content }>


        {/* Bullshit to change page ??? */}
        <RenderIf condition={ _.isNil(enteredNumber)}>
          <StartPage onStartGame={ startGameWithNumber }></StartPage>
        </RenderIf>
        <RenderIf condition={ !_.isNil(enteredNumber)}>
          <GamePage userChoice={ enteredNumber! }></GamePage>
        </RenderIf>

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
