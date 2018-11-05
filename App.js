import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {Recognizer} from 'rn-gesture-recognizer';

let json = require('./gestureClasses.json');


export default class RecognizerApp extends Component {
  render() {
    console.log(json);
    return (
      <SafeAreaView style={styles.container}>
        <Text>Draw gestures to be recognized below!</Text>
        <Recognizer
          color={'#ff0000'}
          strokeWidth={4}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});