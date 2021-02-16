
import { appContainerStyle, buttonStyle, inputStyle, listItemStyle } from 'constants/styles.const';
import { View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacityBase, TouchableOpacity } from 'react-native';

import React, { useState } from 'react';


export interface GoalItemProps {
  text: string,
  onDelete?: () => void 
} 

export default function GoalItem(props: GoalItemProps) {
  return (
    <TouchableOpacity onPress={ props.onDelete }>
      <View style={ styles.listItem }>
        <Text>{ `${props.text}` }</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: listItemStyle
});

