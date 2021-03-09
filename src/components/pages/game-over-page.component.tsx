import { buttonStyle, pageStyle } from '@constants/styles.const';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
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
      <View style={ styles.imageContainer }>
        <Image source={ require('@images/success.png') } style={ styles.image } resizeMode="cover"></Image>
      </View>
      <Text>I guessed { props.numberToGuess } in { props.guessCount } rounds</Text>
      <Button style={ styles.button } onPress={ props.onStartAgain }>Start again</Button>
    </View>
  );
};


const styles = StyleSheet.create({
  page: { ...pageStyle, alignItems: 'center' },
  imageContainer: {
    width: 250, height: 250,
    borderRadius: 125, borderColor: 'black', borderWidth: 3,
    margin: 10,
    overflow: 'hidden'
  },
  image: { width: '100%', height: '100%' },
  button: {  ...buttonStyle, marginHorizontal: 10 },
});


