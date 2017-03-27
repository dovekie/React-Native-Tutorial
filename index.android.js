/**
 * Simple React Tutorial
 */

import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, TextInput, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text style={[styles.bodyText, styles.fakeLink]}>Hello {this.props.name}!</Text>
        );
    }
}

class HelloWorldApp extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Rose-Ringed_Parakeet.jpg'
    };
    return (
    <View style={{alignItems: 'center', flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
      <Image source={pic} style={{width: 193, height: 110}}/>
      <TextInput
        style={{height: 40, width: 150}}
        placeholder="Enter your name!"
        onChangeText={(text) => this.setState({text})} />
      <View style={{height: 50, backgroundColor: 'powderblue'}}>
        <Greeting name='Jack' />
      </View>
      <View style={{height: 50, backgroundColor: 'skyblue'}}>
        <Greeting name='Donna' />
      </View>
      <View style={{height: 50, backgroundColor: 'steelblue'}}>
        <Greeting name='Martha' />
      </View>
      <View style={{height: 50, backgroundColor: 'lightblue'}}>
        <Greeting name={this.state.text} />
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