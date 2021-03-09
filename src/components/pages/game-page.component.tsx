import Card from '@components/common/card.component';
import NumberContainer from '@components/common/number-container.component';
import { buttonStyle, pageStyle, Spaces } from '@constants/styles.const';
import * as u from '@helpers/utils';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';

export interface GamePageProps  {
  userChoice: number
}

export interface Bounds {
  lower: number,
  upper: number
}

/** Bounds included, if `answer` is provided, avoids that value */
function guess(min: number, max: number, answer?: number): number {
  if(min === max) return min;

  const random = u.randomInt(min, max);
  return random === answer ? guess(min, max, answer) : random;
}

export default function GamePage(props: GamePageProps) {
  const [currentBounds, setCurrentBounds] = useState<Bounds>({ lower: 1, upper: 99 });
  const [currentGuess, setCurrentGuess] = useState(guess(1, 99, props.userChoice));
  const [guessCount, setGuessCount] = useState(0);

  // what a joke
  useEffect(() => {
    console.log('// effect //')
    if(currentGuess === props.userChoice) {
      const message = `Guessed: ${currentGuess} in ${guessCount} rounds`;
      console.log(message);
      // TODO: change to game over screen (hopefully there is a graceful way of doing that...)
      Alert.alert('Game Over', `${message}\nTODO: display another screen.`);
    }
  });

  const guessAgain = (min: number, max: number) => {
    setCurrentBounds({ lower: min, upper: max });
    setCurrentGuess(guess(min, max));
    setGuessCount(guessCount + 1);
  };

  const alertNoJoke = () => {
    Alert.alert('What?', 'Stop joking', [{ text: 'Ok', style: 'default' }])
  };

  const lower = () => {
    console.log('lower!!');
    if(props.userChoice > currentGuess) {
      alertNoJoke();
    } else {
      guessAgain(currentBounds.lower, currentGuess - 1);
    }
  };

  const higher = () => {
    console.log('higher!!');
    if(props.userChoice < currentGuess) {
      alertNoJoke();
    } else {
      guessAgain(currentGuess + 1, currentBounds.upper);
    }
  };

  return (
    <View key="[GamePage]" style={ styles.page }>
      <Text>Opponent's guess</Text>
      <NumberContainer>{ currentGuess }</NumberContainer>
      <Card style={ styles.buttonCard }>
        <Button style={ styles.button } onPress={ lower }>Lower</Button>
        <Button style={ styles.button } onPress={ higher }>Higher</Button>
      </Card>
    </View>
  );
};


const styles = StyleSheet.create({
  page: { ...pageStyle, alignItems: 'center' },
  buttonCard: { backgroundColor: 'white', padding: Spaces.innerPadding, flexDirection: 'row', justifyContent: 'space-between' },
  button: {  ...buttonStyle, marginHorizontal: 10 },
});


