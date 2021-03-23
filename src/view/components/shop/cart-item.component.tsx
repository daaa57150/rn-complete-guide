import Touchable from '@components/common/touchable.component';
import { trashIcon } from '@constants/icons.const';
import { shadowStyle, Spaces } from '@constants/styles.const';
import { Ionicons } from '@expo/vector-icons';
import * as u from '@helpers/utils';
import { CartItem } from '@models/cartItem';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface CartItemProps  {
  item: CartItem
  onRemove: () => void
  // product: Product,
  // onViewDetail: () => void,
  // onAddToCart: () => void
}

export default function CartItemComponent(props: CartItemProps) {
  // const item = props.item;
  const product = props.item.product;
  const quantity = props.item.quantity;

  // state management goes here

  return (
    <View key={ u.componentKey('CartItem', product.id) } style={ styles.item }>
      <Text>
        <Text>{ quantity }</Text>
        <Text>{ product.title }</Text>
      </Text>
      <View>
        <Text>{ props.item.price }</Text>
        <Touchable onPress={ props.onRemove }>
          <Ionicons name={ trashIcon } size={ 23 } color="red" />
        </Touchable>
      </View>
    </View>
  );
};

// TODO: style me!
const styles = StyleSheet.create({
  item: {
    ...shadowStyle,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: Spaces.separation,
    padding: Spaces.innerPadding,
    justifyContent: 'space-between'
  },
});


