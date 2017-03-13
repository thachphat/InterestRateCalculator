/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Calculator from './app/calculator.js'

export default class InterestRateCalculator extends Component {
  render() {
    return (
      <Calulator />
    );
  }
}

AppRegistry.registerComponent('InterestRateCalculator', () => InterestRateCalculator);
