import Card from '@components/common/card.component';
import Input from '@components/common/input.component';
import NumberContainer from '@components/common/number-container.component';
import RenderIf from '@components/common/render-if.component';
import { buttonStyle, buttonStyleCancel, pageStyle, Spaces } from '@constants/styles.const';
import { Deferred } from '@helpers/deferred';
import * as u from '@helpers/utils';
import _ from 'lodash-es';
import React, { useState } from 'react';
import { Alert, AlertButton, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import Button from 'react-native-button';
// import Display from 'react-native-display';
// import HideableView from 'react-native-hideable-view';

export interface StartPageProps  {
  onStartGame: (enteredNumber: number) => void;
}

/** Returns the error message if something is wrong */
const validateInput = (enteredNumber?: number): string|undefined => {
  if(_.isNil(enteredNumber)) {
    return 'Please enter a value';
  }
  if(enteredNumber <= 0 || enteredNumber > 99) {
    return 'Please enter a number between 1 and 99';
  }
};

const alertError = async (message: string): Promise<void> => {
  const d = new Deferred();
  const okButton: AlertButton = { text: 'Whatever', style: 'default', onPress: () => d.resolve() };
  Alert.alert('Invalid number', message, [okButton]);
};

export default function StartPage(props: StartPageProps) {

  // states
  const [enteredNumber, setEnteredNumber] = useState<number>();
  const [confirmed, setConfirmed] = useState(false);

  // helpers
  const getEnteredNumberStr = () => u.toString(enteredNumber) ?? undefined;

  const changeText = (text: string) => {
    const number = u.toInt(text);
    setEnteredNumber(number);
    setConfirmed(false);
  };

  const resetNumber = () => {
    setEnteredNumber(undefined);
    setConfirmed(false);
  };

  const confirmNumber = async () => {
    Keyboard.dismiss();

    const error = validateInput(enteredNumber);
    if(!_.isNil(error)) {
      await alertError(error);
      resetNumber();
      return;
    }

    // nothing wrong
    setConfirmed(true);
  };

  const startGame = () => {
    if(!_.isNil(enteredNumber)) {
      props.onStartGame(enteredNumber);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
      <View key="[StartPage]" style={ styles.page }>

        {/* Number selection */}
        <Card style={ styles.inputCard }>
          <View key="[Text]">
            <Text style={ styles.text }>Select a number</Text>
          </View>
          <Input key="Number" blurOnSubmit keyboardType="number-pad" maxLength={2}
            value={ getEnteredNumberStr() }
            onChangeText={ changeText }
          />
          <View key="[Buttons]" style={ styles.buttonView }>
            <Button style={styles.buttonCancel} containerStyle={ styles.buttonContainer } onPress={ resetNumber }>
              Cancel
            </Button>
            <Button style={styles.buttonConfirm} containerStyle={ styles.buttonContainer } onPress={ confirmNumber }>
              Confirm
            </Button>
          </View>
        </Card>

        {/* Number display & start game */}
        <RenderIf condition={ confirmed }>
          <Card style={ styles.numberCard }>
            <Text>Selected number:</Text>
            <NumberContainer>{ getEnteredNumberStr() }</NumberContainer>
            <Button style={ styles.buttonConfirm } onPress={ startGame }>Start game</Button>
          </Card>
        </RenderIf>

      </View>
    </TouchableWithoutFeedback>
  );
};

const cardStyle: ViewStyle = { backgroundColor: 'white', padding: Spaces.innerPadding };

const styles = StyleSheet.create({
  page: pageStyle,
  inputCard: cardStyle,
  text: { textAlign: 'center', paddingVertical: Spaces.innerPadding },
  buttonView: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: 'purple' },
  buttonConfirm: {  ...buttonStyle },
  buttonCancel: { ...buttonStyleCancel },
  buttonContainer: { width: 100 },
  numberCard: { ...cardStyle, marginTop: Spaces.separation, alignItems: 'center', alignSelf: 'center' }
});


