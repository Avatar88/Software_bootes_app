import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  DrawerNavigator,
  DrawerItems,
  StackNavigator
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import Menu from './src/components/Menu';
import ProductsByCat from './src/components/ProductsByCat';
import FoodDetail from './src/components/FoodDetail';
import Cart from './src/components/Cart';
import Callus from './src/components/Callus';
import Contact from './src/components/Contact';
import MapBox from './src/components/MapBox';
import Productos_Index from './src/components/Screen_Productos_Index';
import Productos_Registro from './src/components/Screen_Productos_Registro';


const StackNav = StackNavigator({
  Menu: {
    screen: Menu
  },
  ProductsByCat: {
    screen: ProductsByCat
  },
  FoodDetail: {
    screen: FoodDetail
  },
  Productos_Registro:{
    screen:Productos_Registro
  }
}, {
  initialRouteName: 'Menu'
});

const App = DrawerNavigator({
  Menu: {
    screen: StackNav,
    navigationOptions: {
        drawerLabel: 'Menu',
        drawerIcon:({tintColor}) =>(
            <Icon
                name='shopping-basket'
                size={18}
                style={{color: tintColor}}
            />)
      }
  },
  MapBox : {
    screen: MapBox
  },
  Productos:{
    screen : Productos_Index
  },
  Cart: {
    screen: Cart
  },
  Callus: {
    screen: Callus
  },
  Contact: {
    screen: Contact
  }
}, {
  contentComponent: props => (
      <View style={styles.drawerContainer}>
          <View style={styles.headerDrawer}></View>
          <DrawerItems {...props} style={styles.item} />
      </View>
    ),
    contentOptions: {
      activeTintColor: '#121212',
      style: {
        borderBottomColor: '#000',
        borderBottomWidth: 500
      },
      labelStyle: {
        fontSize: 18
      },
      inactiveTintColor: '#787878',
      inactiveBackgroundColor: 'white',
      activeBackgroundColor: 'white'
    }
});

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  headerDrawer: {
    flex: 0.6,
    backgroundColor: '#f09'
  },
  item: {
    marginTop: 10,
    marginRight: 35,
  }
});

export default App;
