// import * as u from '@helpers/utils';
import CustomHeaderButton from '@components/common/custom-header-button.component';
import ProductItemComponent from '@components/shop/product-item.component';
import { cartIcon, menuIcon } from '@constants/icons.const';
import { Product } from '@models/product';
import { CartAction } from '@store/cart/actions';
import { RootState } from '@store/root';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { NavigationDrawerProp } from 'react-navigation-drawer';
// import { NavigationDrawerScreenComponent, NavigationDrawerScreenProps } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent, NavigationStackScreenProps } from 'react-navigation-stack';
import { useDispatch, useSelector } from 'react-redux';
import { ProductDetailsParams } from './product-details.screen';


type Params = { userId?: string }; // params of the screen as in <MyScreen ...params />
type ScreenProps = unknown; // { language?: string };

type Props = React.PropsWithChildren<NavigationStackScreenProps<Params, ScreenProps>>;
type ScreenType = NavigationStackScreenComponent<Params, ScreenProps>;

// type Props = React.PropsWithChildren<NavigationDrawerScreenProps<Params, ScreenProps>>;
// type ScreenType = NavigationDrawerScreenComponent<Params, ScreenProps>;

const ProductsOverviewScreen = (props: Props): JSX.Element => {

  const dispatch = useDispatch();

  const showDetails = (product: Product) => {
    const params: ProductDetailsParams = { product };
    props.navigation.navigate({ routeName: 'ProductDetails', params });
  }

  const addToCart = (product: Product) => {
    console.log('add to cart action go!');
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

  const onPressCart = () => {
    console.log('Show the cart');
    props.navigation.navigate('Cart');
  };

  const onPressMenu = () => {
    console.log('Show the menu; props:', props);
    (props.navigation as unknown as NavigationDrawerProp).toggleDrawer();  // vtff
  }

  return {
    headerTitle: 'All products 1',
    headerLeft: () => {
      return <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
        <Item title="Menu" iconName={ menuIcon } onPress={ onPressMenu } />
      </HeaderButtons>;
    },
    headerRight: () => {
      // console.log('piou: ', _piou);
      return <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
        <Item title="Cart" iconName={ cartIcon } onPress={ onPressCart } />
      </HeaderButtons>;
    }
  };
}

const styles = StyleSheet.create({
  list: { },
});

export default ProductsOverviewScreen;
