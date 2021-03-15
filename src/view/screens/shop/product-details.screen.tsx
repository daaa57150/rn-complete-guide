import { Product } from '@models/product';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenComponent, NavigationStackScreenProps } from 'react-navigation-stack';

// parameters needed when navigating to this screen
export type ProductDetailsParams = { product: Product };

// private typings for the screen
type Props = React.PropsWithChildren<NavigationStackScreenProps<ProductDetailsParams, ScreenProps>>;
type ScreenType = NavigationStackScreenComponent<ProductDetailsParams, ScreenProps>;

// the screen
function ProductDetailsScreen(props: Props) {
  const product = props.navigation.getParam('product');

  // state management goes here

  return (
    <View key="[ProductDetails]" style={ styles.template }>
      <Text>Product details here!</Text>
    </View>
  );
};

(ProductDetailsScreen as ScreenType).navigationOptions = (props) => {
  const product = props.navigation.getParam('product');
  return {
    headerTitle: product.title
  };
};

const styles = StyleSheet.create({
  template: { },
});

export default ProductDetailsScreen;

