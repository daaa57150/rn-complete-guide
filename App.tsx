import Main from '@components/main.component';
import React from 'react';
import { NativeModules } from 'react-native';

// Moved sources like described here:
// https://forums.expo.io/t/change-project-file-structure-and-stop-using-relative-paths/2055/9

/*
To enable Debug Remotely in real device, you may fatigued to shake device to show developer menu,
you can use the built-in DevSettings native module on iOS:
*/
if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true)
}

export default function App() {
  return <Main></Main>;
};


