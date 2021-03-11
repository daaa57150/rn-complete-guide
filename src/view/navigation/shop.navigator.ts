import { Colors } from '@constants/styles.const';
import ProductsOverviewScreen from '@screens/shop/products-overview.screen';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const shopNavigator = createStackNavigator({
  ProductsOverview: ProductsOverviewScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.select({ android: Colors.primary })
    },
    headerTintColor: Platform.select({ android: 'white', ios: Colors.primary })
  }
});

export const ShopNavigator = createAppContainer(shopNavigator);


