import {useRef, useState} from 'react';

enum Operators {
  na,
  restar,
  sumar,
  multiplicar,
  dividir,
}

export const UseCalculator = () => {
  const [result, setResult] = useState('0');
  const [resultBack, setResultBack] = useState('0');

  const [operation, setOperation] = useState<Operators>(Operators.na);

  const limpiar = () => {
    setResult('0');
    setResultBack('0');
    setOperation(Operators.na);
  };

  const armarNumero = (text: string) => {
    // No aceptar doble punto
    if (result.includes('.') && text === '.') return;

    if (result.startsWith('0') || result.startsWith('-0')) {
      // Punto decimal
      if (text === '.') {
        setResult(result + text);

        // Evaluar si es otro cero, y hay un punto
      } else if (text === '0' && result.includes('.')) {
        setResult(result + text);

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (text !== '0' && !result.includes('.')) {
        setResult(text);

        // Evitar 0000.0
      } else if (text === '0' && !result.includes('.')) {
        setResult(result);
      } else {
        setResult(result + text);
      }
    } else {
      setResult(result + text);
    }
  };

  const positioNegativo = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''));
    } else {
      setResult('-' + result);
    }
  };

  const btnDelete = () => {
    let negativo = '';
    let resultTemp = result;
    if (result.includes('-')) {
      negativo = '-';
      resultTemp = result.substr(1);
    }

    if (resultTemp.length > 1) {
      setResult(negativo + resultTemp.slice(0, -1));
    } else {
      setResult('0');
    }
  };

  const cambiarNumPorAnterior = () => {
    if (result.endsWith('.')) {
      setResultBack(result.slice(0, -1));
    } else {
      setResultBack(result);
    }
    setResult('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    setOperation(Operators.dividir);
  };

  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    setOperation(Operators.multiplicar);
  };

  const btnRestar = () => {
    cambiarNumPorAnterior();
    setOperation(Operators.restar);
  };

  const btnSumar = () => {
    cambiarNumPorAnterior();
    setOperation(Operators.sumar);
  };

  const calcular = () => {
    const num1 = Number(result);
    const num2 = Number(resultBack);

    switch (operation) {
      case Operators.sumar:
        setResult(`${num1 + num2}`);
        break;

      case Operators.restar:
        setResult(`${num2 - num1}`);
        break;

      case Operators.multiplicar:
        setResult(`${num1 * num2}`);
        break;

      case Operators.dividir:
        setResult(`${num2 / num1}`);
        break;
    }
    setOperation(Operators.na);
    setResultBack('0');
  };

  return {
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
  };
};
