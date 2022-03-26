import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';

export const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{...styles.cajaMorada, width: width * 0.2}} />
        <View style={styles.cajaNaranja} />
        {/* <Text>Dimensiones Screnn</Text> */}
      </View>
      <Text>
        W: {width}, H: {height},
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
    // width: '100%',
    // height: 100,
    backgroundColor: 'black',
  },
  cajaNaranja: {
    width: '50%',
    height: '50%',
    backgroundColor: 'orange',
  },
  cajaMorada: {
    width: '50%',
    height: '50%',
    backgroundColor: 'purple',
  },
});
