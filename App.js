import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {Trainer, Recognizer} from 'rn-gesture-recognizer';
import TrainerApp from './Trainer';
// import RecognizerApp from './Recognizer';

let json = require('./gestureClasses.json');

// export default class App extends Component {
//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text>Testing the rn-gesture-recognizer Trainer Component!</Text>
//         <Trainer
//           color={'#ff0000'}
//           strokeWidth={4}
//           path={'/Users/evan/Documents/capstone/trainerTest'}
//         />
//       </SafeAreaView>
//       // <TrainerApp />
//       // <RecognizerApp />
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// });