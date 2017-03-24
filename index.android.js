/**
 * Simple React Tutorial
 */

import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class HelloWorldApp extends Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Rose-Ringed_Parakeet.jpg'
    };
    return (
    <View style={{alignItems: 'center'}}>
      <Image source={pic} style={{width: 193, height: 110}}/>
      <Greeting name='Rose' />
      <Greeting name='Donna' />
      <Greeting name='Martha' />
    </View>
    );
  }
}

AppRegistry.registerComponent('Tutorial', () => HelloWorldApp);