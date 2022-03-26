import React from 'react';
import {View, StyleSheet} from 'react-native';

export const TaskScrren = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxBlue} />
      <View style={styles.boxYellow} />
      <View style={styles.boxCyan} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B425B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxBlue: {
    // flex: 1,
    // alignSelf: 'flex-end',
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: '#5B56D6',
    // position: 'absolute',
    // top: 250
  },
  boxYellow: {
      // flex: 1,
      // alignSelf: 'flex-end',
      width: 100,
      height: 100,
      borderColor: 'white',
      borderWidth: 10,
      backgroundColor: '#F0A23B',
    //   position: 'absolute',
    //   right: 55,
    top:50,
  },
  boxCyan: {
    // flex: 2,
    // flez
    // alignSelf: 'center',
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: 'cyan',
    // position: 'absolute',
    // bottom: 250
  },
});
