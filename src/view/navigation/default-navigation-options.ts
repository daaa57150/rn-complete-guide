import { Colors, fontFamily } from "@constants/styles.const";
import { Platform } from "react-native";
import { NavigationParams, NavigationRoute, NavigationScreenConfig } from "react-navigation";
import { StackNavigationOptions, StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

export const defaultNavigationOptions: NavigationScreenConfig<
    StackNavigationOptions,
    StackNavigationProp<NavigationRoute<NavigationParams>, NavigationParams>,
    unknown
  > | undefined = {
    headerStyle: {
      backgroundColor: Platform.select({ android: Colors.primary })
    },
    headerTintColor: Platform.select({ android: 'white', ios: Colors.primary }),
    headerTitleStyle: { fontFamily: fontFamily.OpenSansBold },
    headerBackTitleStyle: { fontFamily: fontFamily.OpenSansRegular }
}


