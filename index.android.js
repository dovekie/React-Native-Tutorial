/**
 * Simple React Tutorial
 */

import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class HelloWorldApp extends Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Rose-Ringed_Parakeet.jpg'
    };
    return (
    <View>
      <Image source={pic} style={{width: 193, height: 110}}/>
      <Text>Hello World!</Text>
    </View>
    );
  }
}

AppRegistry.registerComponent('Tutorial', () => HelloWorldApp);