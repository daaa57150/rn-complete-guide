import Touchable from '@components/common/touchable.component';
import { shadowStyle, Spaces } from '@constants/styles.const';
import { Product } from '@models/product';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';

export interface ProductItemProps  {
  product: Product,
  onViewDetail: () => void,
  onAddToCart: () => void
}

export default function ProductItem(props: ProductItemProps) {
  const product = props.product;

  // state management goes here

  return (
    <Touchable onPress={ props.onViewDetail }>
      <View key="[ProductItem]" style={ styles.product }>
        <Image source={{ uri: product.imageUrl }} style={ styles.image }/>
        <Text>{ product.title }</Text>
        <Text>${ product.price }</Text>
        <View key="[ProductItemButtons]" style={styles.controlsContainer}>
          <Button onPress={ props.onViewDetail }>Details</Button>

          {/* Needs to be bigger or the touchable will swallow some presses */}
          <Button onPress={ props.onAddToCart }>Add to cart</Button>

        </View>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  product: {
    ...shadowStyle,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    marginHorizontal: Spaces.paddingScreen.horizontal,
    marginVertical: Spaces.separation,
    padding: Spaces.innerPadding,
    justifyContent: 'space-between'
  },
  image: {
    width: '100%',
    height: 200,
    // borderTopLeftRadius: 5,
    // borderTopRightRadius: 5
    borderRadius: 6
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});


