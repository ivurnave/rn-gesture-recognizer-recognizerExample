import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Trainer} from 'rn-gesture-recognizer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
        <Trainer
          containerStyle={{backgroundColor: 'rgba(0,0,0,0.01)', alignSelf: 'stretch'}}
          strokeWidth={4}
          path={'/Users/evan/Documents/capstone/trainerTest'}
        />
        <Text>Hello!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
