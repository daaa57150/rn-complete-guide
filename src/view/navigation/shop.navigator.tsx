import { cartIcon } from '@constants/icons.const';
import { Ionicons } from '@expo/vector-icons';
import CartScreen from '@screens/shop/cart.screen';
import ProductDetailsScreen from '@screens/shop/product-details.screen';
import ProductsOverviewScreen from '@screens/shop/products-overview.screen';
import React from 'react';
import { DrawerIconProps } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack";
import { defaultNavigationOptions } from './default-navigation-options';

export const ShopNavigator = createStackNavigator({
  ProductsOverview: ProductsOverviewScreen,
  ProductDetails: ProductDetailsScreen,
  Cart: CartScreen
}, {
  navigationOptions: {
    drawerLabel: 'Shop 0',
    drawerIcon: (props: DrawerIconProps) => <Ionicons name={ cartIcon } size={ 23 } color={ props.tintColor } />
  },
  defaultNavigationOptions
});

// export const ShopNavigator = createAppContainer(shopNavigator);


