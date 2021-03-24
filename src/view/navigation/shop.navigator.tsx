import CartScreen from '@screens/shop/cart.screen';
import ProductDetailsScreen from '@screens/shop/product-details.screen';
import ProductsOverviewScreen from '@screens/shop/products-overview.screen';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { defaultNavigationOptions } from './default-navigation-options';

const shopNavigator = createStackNavigator({
  ProductsOverview: ProductsOverviewScreen,
  ProductDetails: ProductDetailsScreen,
  Cart: CartScreen
}, {
  defaultNavigationOptions
});

export const ShopNavigator = createAppContainer(shopNavigator);


