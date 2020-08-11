import React, {Component} from 'react';
import {SafeAreaView,View,StyleSheet,Text, Alert} from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines
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
      board: createMinedBoard(rows,cols, this.minesAmount()),
      won: false,
      lost: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Perdeuuuuuuuu Otário!!!', 'Se fudeu!');
    }

    if (won) {
      Alert.alert('PORRA NÃO FEZ MAIS QUE SUA OBRIGAÇÃO', 'VLW POR JOGAR');
    }

    this.setState({ board, lost, won});
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
          <MineField board={this.state.board}
           onOpenField={this.onOpenField} />
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

