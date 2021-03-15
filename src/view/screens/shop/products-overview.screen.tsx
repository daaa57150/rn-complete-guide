// import * as u from '@helpers/utils';
import ProductItem from '@components/shop/product-item.component';
import { Product } from '@models/product';
import { RootState } from '@store/root';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { NavigationStackScreenComponent, NavigationStackScreenProps } from 'react-navigation-stack';
import { useSelector } from 'react-redux';
import { ProductDetailsParams } from './product-details.screen';


type Params = { userId?: string }; // params of the screen as in <MyScreen ...params />
type ScreenProps = unknown; //{ language?: string };

type Props = React.PropsWithChildren<NavigationStackScreenProps<Params, ScreenProps>>;
type ScreenType = NavigationStackScreenComponent<Params, ScreenProps>;

const ProductsOverviewScreen = (props: Props): JSX.Element => {

  const showDetails = (product: Product) => {
    const params: ProductDetailsParams = { product };
    props.navigation.navigate({ routeName: 'ProductDetails', params });
  }

  // state management goes here
  const products = useSelector((state: RootState) => state.products.availableProducts);

  return (
    <FlatList
      key="[ProductsOverview]"
      style={ styles.list }
      ListFooterComponent={ <View style={{ height: 40 }}></View>}
      data={products}
      renderItem={ info => (
        <ProductItem
          product={ info.item }
          onAddToCart={ () => console.log(`Add ${ info.item.title } to cart!`) }
          onViewDetail={ () => showDetails(info.item) }
        />
      )}
    />
  );
};

(ProductsOverviewScreen as ScreenType).navigationOptions = (props) => {
  console.log(props);
  return {
    headerTitle: 'All products 1'
  };
}

const styles = StyleSheet.create({
  list: { },
});

export default ProductsOverviewScreen;
