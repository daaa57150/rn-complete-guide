import RenderIf from '@components/common/render-if.component';
import CartItemComponent from '@components/shop/cart-item.component';
import { Colors, fontFamily, pageStyle, shadowStyle, Spaces } from '@constants/styles.const';
import { formatPrice } from '@helpers/formatters';
import { CartItem } from '@models/cart-item';
import { CartAction } from '@store/cart/actions';
import { RootState } from '@store/root';
import _ from 'lodash-es';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import { useDispatch, useSelector } from 'react-redux';

export interface CartScreenProps  {
  // props
}

export default function CartScreen(props: CartScreenProps) {
  // state management goes here

  const dispatch = useDispatch();

  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const items = useSelector((state: RootState) => state.cart.items);
  const isEmpty = _.isEmpty(items); // NOT SURE IT IS CORRECT (useEffect ?)
  // const isEmpty = useSelector((state: RootState) => state.cart.isEmpty);
  // const isEmpty = useEffect(() => _.isEmpty(items) )
  const removeItem = (item: CartItem) => {
    console.log(`remove ${item.product.title}`);
    dispatch(CartAction.removeProductFromCart(item.product));
  };

  return (
    <View key="[Cart]" style={ styles.cart }>
      <View key="[Summary]" style={ styles.summary }>
        <Text style={ styles.summaryText }>
          Total:&nbsp;
          <Text style={ styles.totalPrice }>${ formatPrice(totalPrice) }</Text>
        </Text>
        <Button disabled={ isEmpty } onPress={ ()=>{} }>Order now</Button>
      </View>
      <RenderIf condition={ isEmpty }>
        <Text>Your cart is empty</Text>
      </RenderIf>
      <RenderIf condition={ !isEmpty }>
        <FlatList style={ styles.list }
          data={ items }
          keyExtractor={ (item) => item.product.id }
          renderItem={ (info) => (
            <CartItemComponent item={ info.item } onRemove={ () => removeItem(info.item) } />
          )}
        />
      </RenderIf>

    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    ...pageStyle //margin: Spaces.paddingScreen.horizontal
  },
  summary: {
    ...shadowStyle,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: 'white', borderRadius: 8,
    padding: Spaces.innerPadding, marginBottom: Spaces.separation
  },
  summaryText: {
    fontFamily: fontFamily.OpenSansBold, fontSize: 18
  },
  totalPrice: {color: Colors.primary },
  list: {
    // overflow: 'visible'
  }
});


