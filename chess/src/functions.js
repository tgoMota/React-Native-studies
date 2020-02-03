import Bis from './components/pieces/Bis'
import Horse from './components/pieces/Horse'
import King from './components/pieces/King'
import Pawn from './components/pieces/Pawn'
import Queen from './components/pieces/Queen'
import Tower from './components/pieces/Tower'
import {Alert} from 'react-native'

const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            const colorSquare = (row + column) % 2 == 0 ? 'black' : 'white';
            const pieceType = getPiece(row,column);
            const hasPiece = row < 2 || row > 5;
            var colorPiece = '';
            if(row < 2) colorPiece = 'black';
            if(row > 5) colorPiece = 'white';
            const piece = pieceFactory(pieceType, row, column, colorPiece);
            return {
                row,
                column,
                colorSquare, 
                piece, 
                hasPiece, //if has piece on the square or not
                able: false, //square open for an possible move
                moving: false
            }
        })
    })
}

const pieceFactory = (pieceType, row, column, colorPiece) => {
    if(pieceType == 'pawn') return new Pawn(pieceType,row, column, colorPiece);
    else if(pieceType == 'tower') return new Tower(pieceType,row, column, colorPiece);
    else if(pieceType == 'horse') return new Horse(pieceType,row, column, colorPiece);
    else if(pieceType == 'bis') return new Bis(pieceType,row, column, colorPiece);
    else if(pieceType == 'queen') return new Queen(pieceType,row, column, colorPiece);
    else if(pieceType == 'king') return new King(pieceType,row, column, colorPiece);
    else return null;
}

const createChessBoard = (rows, columns) => {
    const board = createBoard(rows, columns);
    return board;
}

const getPiece = (row, column) => {
    if(row == 0 || row == 7){
        if(column == 0 || column == 7) return 'tower';
        else if(column == 1 || column == 6) return 'horse';
        else if(column == 2 || column == 5) return 'bis'
        else if(column == 3) return 'queen';
        else return 'king';
    }
    else if(row == 1 || row == 6){
        return 'pawn';
    }
}

const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
}

const resetBoard = board => {
    for(var i = 0; i < 8 ; ++i){
        for(var j = 0; j < 8 ; ++j){
            board[i][j].able = false;
            board[i][j].moving = false;
        }
    }
    return board;
}

const getSrc = (color, piece) => {
    if(color == 'black'){
        if(piece == 'pawn') return require('./imgs/black/pawn.png');
        else if(piece == 'tower') return require('./imgs/black/tower.png');
        else if(piece == 'queen') return require('./imgs/black/queen.png');
        else if(piece == 'horse') return require('./imgs/black/horse.png');
        else if(piece == 'bis') return require('./imgs/black/bis.png');
        else if(piece == 'king') return require('./imgs/black/king.png');
    }else{
        if(piece == 'pawn') return require('./imgs/white/pawn.png');
        else if(piece == 'tower') return require('./imgs/white/tower.png');
        else if(piece == 'queen') return require('./imgs/white/queen.png');
        else if(piece == 'horse') return require('./imgs/white/horse.png');
        else if(piece == 'bis') return require('./imgs/white/bis.png');
        else if(piece == 'king') return require('./imgs/white/king.png');
    }
}

export { 
    createChessBoard,
    getSrc,
    cloneBoard,
    resetBoard
}
