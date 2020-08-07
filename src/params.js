import {Dimensions} from 'react-native';

// Parametros do jogo

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // Proporção do painel superior
    difficultLevel: 0.1,
    getColumnsAmout() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmout() {
        const totalHeight = Dimensions.get('window').width
        const boardHeight = totalHeight * (1 - params.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params;