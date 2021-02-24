import { inputStyle } from '@constants/styles.const';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, ViewStyle } from 'react-native';

export interface InputProps extends TextInputProps {
  style?: ViewStyle,
};

export default function Input(props: InputProps) {
  // state management goes here

  return (
    <TextInput { ...props } style={{ ...styles.input, ...props.style }} />
  );
};

const styles = StyleSheet.create({
  input: { ...inputStyle },
});


