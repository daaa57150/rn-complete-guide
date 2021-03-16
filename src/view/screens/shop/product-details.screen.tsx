import { Spaces } from '@constants/styles.const';
import { Product } from '@models/product';
import { CartAction } from '@store/cart/actions';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import Button from 'react-native-button';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenComponent, NavigationStackScreenProps } from 'react-navigation-stack';
import { useDispatch } from 'react-redux';

// parameters needed when navigating to this screen
export type ProductDetailsParams = { product: Product };

// private typings for the screen
type Props = React.PropsWithChildren<NavigationStackScreenProps<ProductDetailsParams, ScreenProps>>;
type ScreenType = NavigationStackScreenComponent<ProductDetailsParams, ScreenProps>;

// the screen
function ProductDetailsScreen(props: Props) {
  const product = props.navigation.getParam('product');

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(CartAction.addProductToCart(product));
  };

  return (
    <ScrollView key="[ProductDetails]">
      <Image source={{ uri: product.imageUrl }} style={ styles.image } />
      <View key="[Properties]" style={ styles.properties }>
        <View key="[Controls]" style={ styles.controls }>
          <Button onPress={ addToCart }>Add to cart</Button>
        </View>
        <Text style={ styles.price }>${ product.price }</Text>
        <Text style={ styles.description }>{ product.description }</Text>
      </View>
    </ScrollView>
  );
};

(ProductDetailsScreen as ScreenType).navigationOptions = (props) => {
  const product = props.navigation.getParam('product');
  return {
    headerTitle: product.title
  };
};

function withPadding(style: TextStyle): TextStyle;
function withPadding(style: ViewStyle): ViewStyle;
function withPadding(style: ViewStyle|TextStyle): ViewStyle|TextStyle {
    return {
    ...style,
    paddingTop: Spaces.separation
  }
};

const styles = StyleSheet.create({
  properties: {
    paddingHorizontal: Spaces.paddingScreen.horizontal
  },
  image: {
    width: '100%',
    height: 250
  },
  controls: withPadding({
    // flexDirection: 'row',
    // justifyContent: 'flex-end'
  }),
  description: withPadding({

  }),
  price: withPadding({
    fontSize: 20
  })
});

export default ProductDetailsScreen;

