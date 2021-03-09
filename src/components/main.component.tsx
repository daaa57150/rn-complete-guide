import { appContainerStyle, Colors } from '@constants/styles.const';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RenderIf from './common/render-if.component';
import Header from './header.component';
import GameOverPage from './pages/game-over-page.component';
import GamePage from './pages/game-page.component';
import StartPage from './pages/start-page.component';

// export or private things can go here (no `useState`!)

// const logSomething = () => {
//   console.log('Something');
// }

type Page = 'start' | 'game' | 'gameOver';

export default function Main() {
  // state management goes here

  // bullshit saving states from everywhere
  const [numberToGuess, setNumberToGuess] = useState<number>();
  const [guessCount, setGuessCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<Page>('start');

  const isCurrentPage = (page: Page): boolean => currentPage === page;

  const startGameWithNumber = (numberToGuess: number) => {
    setNumberToGuess(numberToGuess);
    setCurrentPage('game');
  };

  const showGameOver = (guessCount: number, numberToGuess: number) => {
    setNumberToGuess(numberToGuess);
    setGuessCount(guessCount);
    setCurrentPage('gameOver');
  };

  const startAgain = () => {
    setNumberToGuess(undefined);
    setGuessCount(0);
    setCurrentPage('start');
  };

  return (
    <View style={ styles.main } key="[Main]">
      <Header title="Guess a  number"/>
      <View key="[Content]" style={ styles.content }>


        {/* Bullshit to change page ??? */}
        <RenderIf condition={ isCurrentPage('start') }>
          <StartPage onStartGame={ startGameWithNumber }></StartPage>
        </RenderIf>
        <RenderIf condition={ isCurrentPage('game') }>
          <GamePage numberToGuess={ numberToGuess! } onEndGame={ showGameOver }></GamePage>
        </RenderIf>
        <RenderIf condition={ isCurrentPage('gameOver') }>
          <GameOverPage numberToGuess={ numberToGuess! } guessCount={ guessCount } onStartAgain={ startAgain }></GameOverPage>
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
