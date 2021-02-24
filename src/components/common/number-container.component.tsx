import { Colors, Spaces } from '@constants/styles.const';
import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type NumberContainerProps = PropsWithChildren<{

}>;

export default function NumberContainer(props: NumberContainerProps) {
  // state management goes here

  return (
    <View key="[Number]" style={ styles.container }>
      <Text style={ styles.number }>{ props.children }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    borderWidth: 2, borderColor: Colors.primary, borderRadius: 10,
    padding: Spaces.innerPadding, marginVertical: Spaces.separation,
    alignContent: 'center', justifyContent: 'center'
  },
  number: { color: Colors.primary, fontSize: 20 }
});


