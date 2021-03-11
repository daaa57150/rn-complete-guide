import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface TemplateProps  {
  // props
}

export default function Template(props: TemplateProps) {
  // state management goes here

  return (
    <View key="[Template]" style={ styles.template }>
      <Text>Some content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  template: { },
});


