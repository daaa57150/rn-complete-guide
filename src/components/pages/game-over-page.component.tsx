import { buttonStyle, pageStyle, Spaces } from '@constants/styles.const';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';

export interface GameOverPageProps  {
  numberToGuess: number,
  guessCount: number,
  onStartAgain: () => void
}

export default function GameOverPage(props: GameOverPageProps) {
  // const [currentBounds, setCurrentBounds] = useState<Bounds>({ lower: 1, upper: 99 });

  return (
    <View key="[GameOverPage]" style={ styles.page }>
      <Text>GAME OVER!!</Text>
      <Text>I guessed { props.numberToGuess } in { props.guessCount } rounds</Text>
      <Button style={ styles.button } onPress={ props.onStartAgain }>Start again</Button>
    </View>
  );
};


const styles = StyleSheet.create({
  page: { ...pageStyle, alignItems: 'center' },
  buttonCard: { backgroundColor: 'white', padding: Spaces.innerPadding, flexDirection: 'row', justifyContent: 'space-between' },
  button: {  ...buttonStyle, marginHorizontal: 10 },
});


