/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';
 /* eslint no-console: 0 */

 import React from 'react';
 import {
   AppRegistry,
   Text,
 } from 'react-native';
 import { StackNavigator } from 'react-navigation';

 class HomeScreen extends React.Component {
   static navigationOptions = {
     title: 'Welcome',
   };
   render() {
     return <Text>Hello, Navigation!</Text>;
   }
 }

 export default const App = StackNavigator({
   Home: { screen: HomeScreen },
 });


AppRegistry.registerComponent('testMap2', () => App);
