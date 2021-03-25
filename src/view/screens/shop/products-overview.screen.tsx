// import * as u from '@helpers/utils';
import ProductItemComponent from '@components/shop/product-item.component';
import { cartHeaderButton, drawerMenuHeaderButton } from '@components/ui/header-buttons';
import { Product } from '@models/product';
import { CartAction } from '@store/cart/actions';
import { RootState } from '@store/root';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenComponent, NavigationStackScreenProps } from 'react-navigation-stack';
import { useDispatch, useSelector } from 'react-redux';
import { ProductDetailsParams } from './product-details.screen';


// type Params = { userId?: string }; // params of the screen as in <MyScreen ...params />
// type ScreenProps = void; // { language?: string };

// type Props = React.PropsWithChildren<NavigationStackScreenProps<Params, ScreenProps>>;
// type ScreenType = NavigationStackScreenComponent<Params, ScreenProps>;

type Props = React.PropsWithChildren<NavigationStackScreenProps<void, ScreenProps>>;
type ScreenType = NavigationStackScreenComponent<void, ScreenProps>;

// type Props = React.PropsWithChildren<NavigationDrawerScreenProps<Params, ScreenProps>>;
// type ScreenType = NavigationDrawerScreenComponent<Params, ScreenProps>;

const ProductsOverviewScreen = (props: Props): JSX.Element => {

  const dispatch = useDispatch();

  const showDetails = (product: Product) => {
    const params: ProductDetailsParams = { product };
    props.navigation.navigate({ routeName: 'ProductDetails', params });
  }

  const addToCart = (product: Product) => {
    dispatch(CartAction.addProductToCart(product));
  };

  // state management goes here
  const products = useSelector((state: RootState) => state.products.availableProducts);

  return (
    <FlatList
      key="[ProductsOverview]"
      style={ styles.list }
      ListFooterComponent={ <View style={{ height: 40 }} />}
      data={products}
      renderItem={ info => (
        <ProductItemComponent
          product={ info.item }
          onAddToCart={ () => addToCart(info.item) }
          onViewDetail={ () => showDetails(info.item) }
        />
      )}
    />
  );
};

(ProductsOverviewScreen as ScreenType).navigationOptions = (props) => {

  return {
    headerTitle: 'All products 1',
    headerLeft: drawerMenuHeaderButton(props),
    headerRight: cartHeaderButton(props)
  };

}

const styles = StyleSheet.create({
  list: { },
});

export default ProductsOverviewScreen;
