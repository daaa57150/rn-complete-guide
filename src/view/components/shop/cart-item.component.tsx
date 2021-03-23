import Touchable from '@components/common/touchable.component';
import { trashIcon } from '@constants/icons.const';
import { Spaces } from '@constants/styles.const';
import { Ionicons } from '@expo/vector-icons';
import { formatPrice } from '@helpers/formatters';
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
    <View  style={ styles.item }>
      <Text style={ styles.left }>
        <Text>{ quantity }</Text>&nbsp;
        <Text>{ product.title }</Text>
      </Text>
      <View style={ styles.right }>
        <Text style={ styles.price }>{ formatPrice(props.item.price) }</Text>
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
    padding: Spaces.innerPadding,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row'
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  price: {
    paddingRight: Spaces.separation
  }
});


