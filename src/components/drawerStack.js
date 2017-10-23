import { StackNavigator } from 'react-navigation';
import{TouchableHighlight, Text, View} from 'react-native';
import DrawerScreen from './drawerScreen';
import React from 'react';
const DrawerNavigation = StackNavigator({

      DrawerStack : {screen : DrawerScreen}

    },{
//le pasamos un objeto con mas personlaizacion
//siempre este encima cuande escondael menu
      headerMode : 'float',
      navigationOptions : ({navigation}) => ({

        headerStyle : {

            backgroundColor : 'rgb(255,45,85)',

            paddingLeft: 10,
            paddingRight: 10,

        },

        title : 'Home',
        headerTintColor: 'white',//color de texto de la cabecera
        headerLeft : // le pasaremos un boton
        <View>

          <TouchableHighlight //poder hacerlo touchable

            onPress = {() => {
              //funcion que llama a navigation, le pasamos DrawerOpen para abrir
              //el menu
              if(navigation.state.index == 0){
                navigation.navigate('DrawerOpen');
              }
            }}>
            <Text>Menu</Text>
            </TouchableHighlight>

        </View>


    })
    })
    export default DrawerNavigation;
