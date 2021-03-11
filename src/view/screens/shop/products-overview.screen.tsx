import { RootState } from '@store/root';
import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { NavigationStackScreenComponent, NavigationStackScreenProps } from 'react-navigation-stack';
import { useSelector } from 'react-redux';

// export interface ProductsOverviewScreenProps  {
//   // props
// }

// TODO: WTF is the difference ?
type Params = { userId?: string };
type ScreenProps = unknown; //{ language?: string };

type Props = React.PropsWithChildren<NavigationStackScreenProps<Params, ScreenProps>>;
type ProductsOverviewScreenType = NavigationStackScreenComponent<Params, ScreenProps>;

const ProductsOverviewScreen: ProductsOverviewScreenType = (props: Props): JSX.Element => {

  // state management goes here
  const products = useSelector((state: RootState) => state.products.availableProducts);

  return (
    <FlatList
      key="[ProductsOverview]"
      style={ styles.list }
      data={products}
      renderItem={ info => <Text>{ info.item.title }</Text>}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All products'
}

const styles = StyleSheet.create({
  list: { },
});

export default ProductsOverviewScreen;
