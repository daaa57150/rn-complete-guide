import CustomHeaderButton from "@components/common/custom-header-button.component";
import { cartIcon, menuIcon } from "@constants/icons.const";
import React from "react";
import { ScreenProps } from "react-native-screens";
import { NavigationParams, NavigationRoute, NavigationScreenConfigProps } from "react-navigation";
import { NavigationDrawerProp } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";


export const drawerMenuHeaderButton = (
  // props: NavigationScreenConfigProps<
  // StackNavigationProp<NavigationRoute<NavigationParams>, void> & NavigationDrawerProp<NavigationRoute<NavigationParams>, void>,
  // ScreenProps>
  props: NavigationScreenConfigProps<StackNavigationProp<NavigationRoute<NavigationParams>, void>, ScreenProps>
) => {

  const onPressMenu = () => {
    (props.navigation as unknown as NavigationDrawerProp).toggleDrawer();  // vtff
  };

  return (/* should have props here */) => {
    return <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
      <Item title="Menu" iconName={ menuIcon } onPress={ onPressMenu } />
    </HeaderButtons>;
  }
};

export const cartHeaderButton = (
  props: NavigationScreenConfigProps<StackNavigationProp<NavigationRoute<NavigationParams>, void>, ScreenProps>
) => {

  const onPressCart = () => {
    props.navigation.navigate('Cart');
  };

  return () => {
    // console.log('piou: ', _piou);
    return <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
      <Item title="Cart" iconName={ cartIcon } onPress={ onPressCart } />
    </HeaderButtons>;
  }
};

