import React, {Component} from 'react';
import {SafeAreaView,View,StyleSheet,Text} from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField'
import {
  createMinedBoard
} from './src/functions';
import Mine from './src/components/Mine';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () =>{
    const cols = params.getColumnsAmout();
    const rows = params.getRowsAmout();
    return Math.ceil(cols * rows * params.difficultLevel);
  }

  createState = () => {
    const cols = params.getColumnsAmout();
    const rows = params.getRowsAmout();
    return {
      board: createMinedBoard(rows,cols, this.minesAmount())
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>
          Iniciando o Mines!!!
        </Text>
        <Text>
          Tamanho da grade:
          {params.getRowsAmout()}x{params.getColumnsAmout()}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </SafeAreaView>
    );
  };
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});

