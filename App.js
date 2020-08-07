import React from 'react';
import {SafeAreaView,StyleSheet,Text,} from 'react-native';
import params from './src/params';

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
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
