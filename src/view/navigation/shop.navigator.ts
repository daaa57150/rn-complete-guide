import { Colors, fontFamily } from '@constants/styles.const';
import ProductDetailsScreen from '@screens/shop/product-details.screen';
import ProductsOverviewScreen from '@screens/shop/products-overview.screen';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const shopNavigator = createStackNavigator({
  ProductsOverview: ProductsOverviewScreen,
  ProductDetails: ProductDetailsScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.select({ android: Colors.primary })
    },
    headerTintColor: Platform.select({ android: 'white', ios: Colors.primary }),
    headerTitleStyle: { fontFamily: fontFamily.OpenSansBold },
    headerBackTitleStyle: { fontFamily: fontFamily.OpenSansRegular }
  }
});

export const ShopNavigator = createAppContainer(shopNavigator);


