import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonCalComponent} from '../components/ButtonCalComponent';
import {UseCalculator} from '../hooks/UseCalculator';

export const CalculatorScreen = () => {
  const operatorsDisplay = ['', '-', '+', '*', '/'];
  const {
    operation,
    resultBack,
    result,
    limpiar,
    positioNegativo,
    btnDelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = UseCalculator();

  return (
    <View style={styles.container}>
      <Text style={{...styles.resultCurrent, ...styles.resultHistory}}>
        {resultBack}
        {operatorsDisplay[operation]}
      </Text>
      <Text style={styles.resultCurrent} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>
      <View style={styles.rowCal}>
        <ButtonCalComponent text="C" color="#9B9B9B" action={limpiar} />
        <ButtonCalComponent
          text="+/-"
          color="#9B9B9B"
          action={positioNegativo}
        />
        <ButtonCalComponent text="del" color="#9B9B9B" action={btnDelete} />
        <ButtonCalComponent text="/" color="#FF9427" action={btnDividir} />
      </View>
      <View style={styles.rowCal}>
        <ButtonCalComponent text="7" action={armarNumero} />
        <ButtonCalComponent text="8" action={armarNumero} />
        <ButtonCalComponent text="9" action={armarNumero} />
        <ButtonCalComponent text="x" color="#FF9427" action={btnMultiplicar} />
      </View>
      <View style={styles.rowCal}>
        <ButtonCalComponent text="4" action={armarNumero} />
        <ButtonCalComponent text="5" action={armarNumero} />
        <ButtonCalComponent text="6" action={armarNumero} />
        <ButtonCalComponent text="-" color="#FF9427" action={btnRestar} />
      </View>
      <View style={styles.rowCal}>
        <ButtonCalComponent text="1" action={armarNumero} />
        <ButtonCalComponent text="2" action={armarNumero} />
        <ButtonCalComponent text="3" action={armarNumero} />
        <ButtonCalComponent text="+" color="#FF9427" action={btnSumar} />
      </View>
      <View style={styles.rowCal}>
        <ButtonCalComponent text="0" ancho action={armarNumero} />
        <ButtonCalComponent text="." action={armarNumero} />
        <ButtonCalComponent text="=" color="#FF9427" action={calcular} />
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
  resultCurrent: {
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
