import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {Trainer} from 'rn-gesture-recognizer';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Testing the rn-gesture-recognizer Trainer Component!</Text>
        <Trainer
          color={'#ff0000'}
          strokeWidth={4}
          path={'/Users/evan/Documents/capstone/trainerTest'}
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
