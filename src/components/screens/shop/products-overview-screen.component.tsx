import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface ProductsOverviewScreenProps  {
  // props
}

export default function ProductsOverviewScreen(props: ProductsOverviewScreenProps) {
  // state management goes here

  return (
    <View key="[ProductsOverview]" style={ styles.template }>
      <Text>Products Overview</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  template: { },
});


