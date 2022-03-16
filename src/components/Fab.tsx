import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableNativeFeedback} from 'react-native';
interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {
  return (
    <View
      style={[
        styles.fabLocation,
        position === 'bl' ? styles.left : styles.right,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#2B425B', false, 30)}>
        <View style={styles.buttonFab}>
          <Text style={styles.buttonFabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  titles: {fontSize: 45, textAlign: 'center'},
  fabLocation: {
    position: 'absolute',
    bottom: 10,
  },
  left: {
    left: 10,
  },
  right: {
    right: 10,
  },
  buttonFab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 8,
  },
  buttonFabText: {
    top: -3,
    fontSize: 38,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
