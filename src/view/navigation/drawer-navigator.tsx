import { Colors } from "@constants/styles.const";
import { createAppContainer, CreateNavigatorConfig, NavigationRoute } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { NavigationDrawerConfig, NavigationDrawerOptions, NavigationDrawerProp, NavigationDrawerRouterConfig } from "react-navigation-drawer/lib/typescript/src/types";
import { OrdersNavigator } from "./orders.navigatorx";
import { ShopNavigator } from "./shop.navigator";

const options: CreateNavigatorConfig<NavigationDrawerConfig, NavigationDrawerRouterConfig, NavigationDrawerOptions, NavigationDrawerProp<NavigationRoute, any>> = {
  contentOptions: {
    activeTintColor: Colors.primary
  },
  drawerType: 'slide'
};

const drawerNavigator = createDrawerNavigator({
  Shop: ShopNavigator,
  Orders: OrdersNavigator,
}, options);

export const DrawerNavigator = createAppContainer(drawerNavigator);


