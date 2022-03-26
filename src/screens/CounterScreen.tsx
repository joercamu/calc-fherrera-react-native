import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [count, setcount] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.titles}> {count} </Text>
      <Fab title="+" onPress={() => setcount(count + 1)} />
      <Fab title="-" onPress={() => setcount(count - 1)} position="bl" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  titles: {fontSize: 45, textAlign: 'center'},
});
