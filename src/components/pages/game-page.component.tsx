import Card from '@components/common/card.component';
import NumberContainer from '@components/common/number-container.component';
import { buttonStyle, pageStyle, Spaces } from '@constants/styles.const';
import * as u from '@helpers/utils';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';

export interface GamePageProps  {
  userChoice: number
}

function guess(min: number, max: number, answer?: number): number {
  if(min === max) return min;

  const random = u.randomInt(min, max);
  return random === answer ? guess(min, max, answer) : random;
}

export default function GamePage(props: GamePageProps) {
  const [currentGuess, setCurrentGuess] = useState(guess(1, 99, props.userChoice));

  const lower = () => {
    console.log('lower!!');
  };

  const higher = () => {
    console.log('higher!!');
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


