import OrdersOverviewScreen from '@screens/orders/orders-overview.screen';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { defaultNavigationOptions } from './default-navigation-options';


const ordersNavigator = createStackNavigator({
  OrdersOverview: OrdersOverviewScreen
}, {
  defaultNavigationOptions
});

export const OrdersNavigator = createAppContainer(ordersNavigator);
