import { Colors } from '@constants/styles.const';
import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { HeaderButton, HeaderButtonProps } from "react-navigation-header-buttons";


// export type HeaderButtonProps = PropsWithChildren<{

// }>;

export interface CustomHeaderButtonProps extends HeaderButtonProps {

}

export default function CustomHeaderButton(props: CustomHeaderButtonProps) {
  // state management goes here

  console.log('CustomHeaderButton!!!');

  return (
    // <View key="[HeaderButton]" style={ styles.template }>
    //   <Text>Some content</Text>
    // </View>
    <HeaderButton
      {...props}
      IconComponent={ Ionicons } iconSize={ 23 }
      color={ Platform.select({ android: 'white', ios: Colors.primary })}
    />
  );
};

const styles = StyleSheet.create({
  template: { },
});


