/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';
 /* eslint no-console: 0 */

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}


AppRegistry.registerComponent('testMap2', () => App);
