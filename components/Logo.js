import React, {Component} from 'react';
import {Text, Platform, View, StyleSheet, Image} from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 110}}
          source={require('../img/fw.png')}
        />
        <Text style={styles.logoText}>make it rain</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontFamily: 'Baskerville',
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)',
  },
});
