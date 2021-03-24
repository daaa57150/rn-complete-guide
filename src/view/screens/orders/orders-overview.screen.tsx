import CustomHeaderButton from '@components/common/custom-header-button.component';
import { menuIcon } from '@constants/icons.const';
import { pageStyle } from '@constants/styles.const';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent, NavigationStackScreenProps } from 'react-navigation-stack';


// private typings for the screen
type Props = React.PropsWithChildren<NavigationStackScreenProps<void, ScreenProps>>;
type ScreenType = NavigationStackScreenComponent<void, ScreenProps>;

export default function OrdersOverviewScreen(props: Props) {
  // state management goes here

  // const dispatch = useDispatch();

  // const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  // const items = useSelector((state: RootState) => state.cart.items);
  // const isEmpty = _.isEmpty(items);



  return (
    <View key="[OrdersOverview]" style={ styles.orders }>
      <Text>Orders here</Text>
    </View>
  );
};

(OrdersOverviewScreen as ScreenType).navigationOptions = (props) => {

  const onPressMenu = () => {
    console.log('Show the menu; props:', props);
    (props.navigation as any).toggleDrawer();
  }

  return {
    headerTitle: 'Your orders',
    headerLeft: (_piou) => {
      return <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
        <Item title="Menu" iconName={ menuIcon } onPress={ onPressMenu } />
      </HeaderButtons>;
    },
  };
};

const styles = StyleSheet.create({
  orders: {
    ...pageStyle // margin: Spaces.paddingScreen.horizontal
  }
});


