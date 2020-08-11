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

export {CreateMinedBoard}