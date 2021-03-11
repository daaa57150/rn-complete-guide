import { Colors, fontFamily } from '@constants/styles.const';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface HeaderProps  {
  title: string;
}

export default function Header(props: HeaderProps) {
  // state management goes here

  return (
    <View key="[Header]" style={ styles.header }>
      <Text style={ styles.title }>{ props.title }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { width: '100%', height: 83, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f', marginTop: 20 },
  title: { backgroundColor: Colors.cell, fontFamily: fontFamily.OpenSansBold }
});


