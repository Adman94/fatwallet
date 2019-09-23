import React, { Component } from 'react';
import { Text, Platform, View, StyleSheet, StatusBar } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Fatwallet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#607d8b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
