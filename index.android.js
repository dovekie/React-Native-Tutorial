/**
 * Simple React Tutorial
 */

import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text style={[styles.bodyText, styles.fakeLink]}>Hello {this.props.name}!</Text>
        );
    }
}

class HelloWorldApp extends Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Rose-Ringed_Parakeet.jpg'
    };
    return (
    <View style={{alignItems: 'center', height: 300}}>
      <Image source={pic} style={{width: 193, height: 110}}/>
      <View style={{flex: 1, backgroundColor: 'powderblue'}}>
        <Greeting name='Jack' />
      </View>
      <View style={{flex: 2, backgroundColor: 'skyblue'}}>
        <Greeting name='Donna' />
      </View>
      <View style={{flex: 3, backgroundColor: 'steelblue'}}>
        <Greeting name='Martha' />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    bodyText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30
    },
    fakeLink: {
        color: 'blue'
    },
});

AppRegistry.registerComponent('Tutorial', () => HelloWorldApp);