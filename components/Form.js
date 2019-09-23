import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Form extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          placeholder='Email'
          placeholderTextColor='#ffffff'
        />
        <TextInput
          style={styles.inputBox}
          placeholder='Password'
          placeholderTextColor='#ffffff'
        />
        <TouchableOpacity>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    height: 40,
    backgroundColor: 'rgba(255,255,252,0.2)',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 3
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff'
  }
});
