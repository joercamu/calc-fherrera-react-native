import React from 'react';
import {View, StyleSheet} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxGreen} /> 
      <View style={styles.boxRed} />
      <View style={styles.boxBlue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
  },
  boxRed: {
    borderWidth: 10,
    borderColor: 'white',
    width: 100,
    height: 100,
    backgroundColor: 'red',
    position: 'absolute',
  },
  boxBlue: {
    borderWidth: 10,
    borderColor: 'white',
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    position: 'absolute',
    right: 0,
  },
  boxGreen: {
    borderWidth: 10,
    borderColor: 'white',
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    // position:'absolute',
    // bottom: 0,
    // top: 0,
    // left: 0,
    // right: 0
    ...StyleSheet.absoluteFillObject,
  },
});
