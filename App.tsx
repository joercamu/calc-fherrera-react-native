import React from 'react';
import {SafeAreaView} from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';


export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <CalculatorScreen/>
    </SafeAreaView>
  );
};
