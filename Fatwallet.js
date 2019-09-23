import React, {Component} from 'react';
import {Text, Platform, View, StyleSheet, StatusBar} from 'react-native';

import Login from './pages/Login';

export default class Fatwallet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="34515e" barStyle="light-content" />
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#607d8b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
