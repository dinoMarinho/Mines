import React from 'react';
import {SafeAreaView,StyleSheet,Text} from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>
        Iniciando o Mines!!!
      </Text>
      <Text>
        Tamanho da grade:
        {params.getRowsAmout()}x{params.getColumnsAmout()}
      </Text>

      <Field/>
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={3} />
      <Field opened nearMines={6} />
      <Field mined />
      <Field mined opened/>
      <Field mined opened exploded/>
      <Field flagged/>
      <Field flagged opened/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    // justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

export default App;
