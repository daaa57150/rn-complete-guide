import { Colors, fontFamily } from '@constants/styles.const';
import CartScreen from '@screens/shop/cart.screen';
import ProductDetailsScreen from '@screens/shop/product-details.screen';
import ProductsOverviewScreen from '@screens/shop/products-overview.screen';
import { Platform } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// const defaultNavigationOptions = {
//   headerStyle: {
//     backgroundColor: Platform.select({ android: Colors.primary })
//   },
//   headerTintColor: Platform.select({ android: 'white', ios: Colors.primary }),
//   headerTitleStyle: { fontFamily: fontFamily.OpenSansBold },
//   headerBackTitleStyle: { fontFamily: fontFamily.OpenSansRegular },
//   // headerRight: () => {
//   //   return <View style={{ width: 20, height: 20, backgroundColor: 'green' }}></View>
//   // }
// };

const shopNavigator = createStackNavigator({
  ProductsOverview: ProductsOverviewScreen,
  ProductDetails: ProductDetailsScreen,
  Cart: CartScreen
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


