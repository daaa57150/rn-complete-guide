import { fontFamily } from '@constants/styles.const';
import { ShopNavigator } from '@navigation/shop.navigator';
import { rootStore } from '@store/root';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NativeModules } from 'react-native';
import { Provider } from 'react-redux';


// Moved sources like described here:
// https://forums.expo.io/t/change-project-file-structure-and-stop-using-relative-paths/2055/9

/*
To enable Debug Remotely in real device, you may fatigued to shake device to show developer menu,
you can use the built-in DevSettings native module on iOS:
*/
if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true)
}

const loadFonts = async () => {
  return Font.loadAsync({
    [fontFamily.OpenSansBold]: require('@fonts/OpenSans-Bold.ttf'),
    [fontFamily.OpenSansRegular]: require('@fonts/OpenSans-Regular.ttf'),
  });
};


// may be moved in a 'store.ts' file ? //
// const rootReducer = combineReducers({
//   products: productsReducer
// });
// const store = createStore(rootReducer);
// ----------------------------------- //

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const loading = async () => {
    if(!isLoading) return;

    console.log('loading fonts...');
    await Promise.all([loadFonts()])
    // await u.wait(10000);
    console.log('fonts loaded.');
    setIsLoading(false);
  };

  useEffect(() => {
    loading();
  });

  if(isLoading) {
    return <AppLoading></AppLoading>
  }
  return (
    <Provider store={ rootStore }>
      <ShopNavigator />

      {/* colors don't work... */}
      <StatusBar style="auto" backgroundColor="#C2185B" translucent={ false } />
    </Provider>
  );
};


