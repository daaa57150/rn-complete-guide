import Card from '@components/common/card.component';
import NumberContainer from '@components/common/number-container.component';
import { buttonStyle, pageStyle, Spaces } from '@constants/styles.const';
import { Ionicons } from '@expo/vector-icons';
import * as u from '@helpers/utils';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';

export interface GamePageProps  {
  numberToGuess: number,
  onEndGame: (guessCount: number, numberToGuess: number) => void
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
  const [currentGuess, setCurrentGuess] = useState(guess(1, 99, props.numberToGuess));
  const [guessCount, setGuessCount] = useState(0);

  // what a joke
  useEffect(() => {
    console.log('// effect //')
    if(currentGuess === props.numberToGuess) {
      console.log(`Guessed: ${currentGuess} in ${guessCount} rounds`);
      props.onEndGame(guessCount, currentGuess);
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
    if(props.numberToGuess > currentGuess) {
      alertNoJoke();
    } else {
      guessAgain(currentBounds.lower, currentGuess - 1);
    }
  };

  const higher = () => {
    console.log('higher!!');
    if(props.numberToGuess < currentGuess) {
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
        <Button style={ styles.button }  containerStyle={ styles.buttonContainer } onPress={ lower }>
          <Ionicons name="md-remove-circle" size={ 50 }></Ionicons>
        </Button>
        <Button style={ styles.button } containerStyle={ styles.buttonContainer } onPress={ higher }>
          <Ionicons name="md-add-circle" size={ 50 }></Ionicons>
        </Button>
      </Card>
    </View>
  );
};


const styles = StyleSheet.create({
  page: { ...pageStyle, alignItems: 'center' },
  buttonCard: { backgroundColor: 'white', padding: Spaces.innerPadding, flexDirection: 'row', justifyContent: 'space-between', width: 150 },
  button: {  ...buttonStyle, marginHorizontal: 30 },
  buttonContainer: { width: 50, height: 50 /*, marginHorizontal: 30*/ }
});


