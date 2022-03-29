import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonCalComponent} from '../components/ButtonCalComponent';

export const CalculatorScreen = () => {
  const [result, setResult] = useState('0');

  const doResult = (numberToConcat: string) => {
    // clean
    if (numberToConcat === 'C') {
      setResult('0');
      return;
    }

    // primer numero
    if (result === '0' && numberToConcat !== '0') {
      setResult(numberToConcat);
      return;
    }

    // primer numero
    if (result.includes('.') && numberToConcat === '.') {
      return;
    }

    // else
    setResult(result + numberToConcat);
  };

  return (
    <View style={styles.container}>
      <Text style={{...styles.result, ...styles.resultHistory}}>0</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.rowCal}>
        <ButtonCalComponent text="C" color="#9B9B9B" action={doResult} />
        <ButtonCalComponent text="+/-" color="#9B9B9B" action={doResult} />
        <ButtonCalComponent text="del" color="#9B9B9B" action={doResult} />
        <ButtonCalComponent text="/" color="#FF9427" action={doResult} />
      </View>
      <View style={styles.rowCal}>
        <ButtonCalComponent text="7" action={doResult} />
        <ButtonCalComponent text="8" action={doResult} />
        <ButtonCalComponent text="9" action={doResult} />
        <ButtonCalComponent text="x" color="#FF9427" action={doResult} />
      </View>
      <View style={styles.rowCal}>
        <ButtonCalComponent text="4" action={doResult} />
        <ButtonCalComponent text="5" action={doResult} />
        <ButtonCalComponent text="6" action={doResult} />
        <ButtonCalComponent text="-" color="#FF9427" action={doResult} />
      </View>
      <View style={styles.rowCal}>
        <ButtonCalComponent text="1" action={doResult} />
        <ButtonCalComponent text="2" action={doResult} />
        <ButtonCalComponent text="3" action={doResult} />
        <ButtonCalComponent text="+" color="#FF9427" action={doResult} />
      </View>
      <View style={styles.rowCal}>
        <ButtonCalComponent text="0" ancho action={doResult} />
        <ButtonCalComponent text="." action={doResult} />
        <ButtonCalComponent text="=" color="#FF9427" action={doResult} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  result: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
  },
  resultHistory: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
  },
  rowCal: {
    //   backgroundColor: 'green',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
});
