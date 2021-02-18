import Card from '@components/common/card.component';
import { pageStyle, Spaces } from '@constants/styles.const';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface StartPageProps  {
  // props
}

export default function StartPage(props: StartPageProps) {
  // state management goes here

  return (
    <View key="[StartPage]" style={ styles.page }>
      <Card style={ styles.card }>
        <Text>Some content</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  page: { ...pageStyle, flex: 1, width: '100%'},
  card: { width: '100%', backgroundColor: 'white', padding: Spaces.innerPadding }
});


