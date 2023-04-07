/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import type {Node} from 'react';
import {Button, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  const [resultText, setResultText] = useState('');
  const [calculationsText, setCalculationsText] = useState('');

  const calculateResult = () => {
    setCalculationsText(eval(resultText));
    console.log('Resulted text is: ', calculationsText);
  };
  const validate = () => {
    switch (resultText.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false;
    }
    return true;
  };

  const _onBtnPress = text => {
    if (text === '=') {
      return validate() && calculateResult();
    }
    setResultText(resultText + text);
  };
  const _operate = operation => {
    switch (operation) {
      case 'Del':
        const text = resultText.split('');
        text.pop();
        setResultText(text.join(''));
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = resultText.split('').pop();
        if (operations.indexOf(lastChar) > 0) return;
        if (resultText === '') return;
        setResultText(resultText + operation);
    }
  };
  let rows = [];
  const nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['.', 0, '='],
  ];
  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity
          key={nums[i][j]}
          style={styles.btn}
          onPress={() => _onBtnPress(nums[i][j])}>
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>,
      );
    }
    rows.push(
      <View key={i} style={styles.row}>
        {row}
      </View>,
    );
  }
  const operations = ['Del', '+', '-', '*', '/'];
  let ops = [];
  for (let i = 0; i < 5; i++) {
    ops.push(
      <TouchableOpacity
        key={operations[i]}
        style={styles.btn}
        onPress={() => _operate(operations[i])}>
        <Text style={[styles.btnText, styles.white]}>{operations[i]}</Text>
      </TouchableOpacity>,
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.calculations}>
        <Text style={styles.calculationsText}>{calculationsText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>{rows}</View>
        <View style={styles.operations}>{ops}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    marginRight: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 65,
    color: 'black',
  },
  calculations: {
    flex: 1,
    marginRight: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calculationsText: {
    fontSize: 40,
    color: 'black',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#434343',
  },
  operations: {
    flex: 1,
    backgroundColor: '#636363',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnText: {
    fontSize: 30,
    color: 'white',
  },
  white: {
    color: 'white',
  },
});

export default App;
