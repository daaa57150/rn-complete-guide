import { ordersIcon } from '@constants/icons.const';
import { Ionicons } from '@expo/vector-icons';
import OrdersOverviewScreen from '@screens/orders/orders-overview.screen';
import React from 'react';
import { DrawerIconProps } from 'react-navigation-drawer';
import { createStackNavigator } from "react-navigation-stack";
import { defaultNavigationOptions } from './default-navigation-options';


export const OrdersNavigator = createStackNavigator({
  OrdersOverview: OrdersOverviewScreen
}, {
  navigationOptions: {
    drawerLabel: 'My orders',
    drawerIcon: (props: DrawerIconProps) => {
      console.log('drawerIcon props:', props);
      return <Ionicons name={ ordersIcon } size={ 23 } color={ props.tintColor } />;
    }
  },
  defaultNavigationOptions
});

// export const OrdersNavigator = createAppContainer(ordersNavigator);
