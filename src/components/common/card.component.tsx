import { shadowStyle } from '@constants/styles.const';
import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

export interface CardProps  {
  children?: ReactNode;
  style?: ViewStyle
}

export default function Card(props: CardProps) {
  // state management goes here

  return (
    <View key="[Card]" style={{ ...styles.card, ...props.style }}>
      { props.children }
    </View>
  );
};

const styles = StyleSheet.create({
  card: { ...shadowStyle },
});

