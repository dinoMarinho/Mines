// Cria a matriz para o tabuleiro do jogo
const createBoard = (rows,columns) => {
    //Para ignorar o primeiro elemento do array usar _
    return Array(rows).fill(0).map((_,row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined : false,
                exploded: false,
                nearMines: 0
            }
        });
    });
}

// Cria e expalha as minas pelo campo
const spreadMines = (board, minesAmount) => {
    const rows = board.length;
    const columns = board[0].length;
    let minesPlanted = 0;

    while (minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10);
        const columnSel = parseInt(Math.random() * columns, 10);

        if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true;
            minesPlanted++;
        }
    }
}

// Cria o tabuleiro final já com as minas plantadas
const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns);
    spreadMines(board,minesAmount);
    return board;
}

// Clona o tabuleiro para um tabuleiro virtual
const cloneBoard = board => {
    return board.map(rows => {
        return rows.map( field =>{
            return { ...field} //operador spread
        });
    });
}

// Recupera os campos vizinhos do local selecionado
const getNeighbors = (board, row, column) => {
    const neightbors = [];
    const rows = [ row - 1, row, row + 1 ];
    const columns = [column -1, column, column + 1];
    rows.forEach( r => {
        columns.forEach(c => {
            const diferent = r !== row || c !== column;
            const validRow = r >= 0 && r < board.length;
            const validColumn = c >=0 && c < board.length;
            if (different && validRow && validColumn) {
                neightbors.push(board[r][c]);
            }
        });
    });
    return neightbors;
}

// Verifica se a vizinhança são seguros
const safeNeighborhood = (board,row,column) => {
    const safes = (result, neightbor) => result && !neightbor.mined
    return getNeighbors(board,row, column).reduce(safes,true);
}

// Abre os campos
const openField = (board,row,column) => {
    const field = board[row][column];
    if(!field.opened){
        field.opened = true;
        if(field.mined){
            field.exploded = true;
        } else if (safeNeighborhood(board, row, column)) {
            //Usa a função de forma recursiva
            getNeighbors(board, row, column).forEach( n => openField(board,n.row,n.column));
        } else {
            const neighbors = getNeighbors(board, row, column);
            field.nearMines = neightbors.filter( n => n.mined).length;
        }
    }
}

// Transforma todo o tabuleiro em um array
const fields = board => [].concat(...board);

// Verifica se existe algum campo explodido
const hadExplosion = board => fields(board).filter(field => field.exploded). lenght > 0;

// Verifica se existe algum campo pendente
const pendding = field => (field.mined && !field.flagged) || (!field.mined && !field.opened);

// Verifica se o usuário ganhou o game
const wonGame = board => fields(board).filter(pedding).lenght === 0;

// Mostra todas as minas existentes
const showMines = board => fields(board).filter(field => field.mined).forEach(field => field.opened = true);

export { createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines }