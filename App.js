import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {Recognizer} from 'rn-gesture-recognizer';

let gestureClasses = require('./gestureClasses.json');

export default class RecognizerApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gesture: ''
    }
  }

  myCallback = (dataFromChild) => {
    this.setState({
      gesture: dataFromChild
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Draw gestures to be recognized below!</Text>
        <Recognizer
          color={'#ff0000'}
          strokeWidth={4}
          trainingData={gestureClasses}
          recognitionHandler={this.myCallback}
        />
        <Text style={styles.text}>{this.state.gesture}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center'
  }
});