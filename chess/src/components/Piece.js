import React from 'react'
import { View,Text,StyleSheet, TouchableWithoutFeedback, ImageBackground, Alert } from 'react-native'
import params from '../params'

export default props => {
    const stylePiece =  [styles.piece];
    const { colorPiece , piece } = props

    const getSrc = (color, piece) => {
        if(color == 'black'){
            if(piece == 'pawn') return require('./../imgs/black/pawn.png');
            else if(piece == 'tower') return require('./../imgs/black/tower.png');
            else if(piece == 'queen') return require('./../imgs/black/queen.png');
            else if(piece == 'horse') return require('./../imgs/black/horse.png');
            else if(piece == 'bis') return require('./../imgs/black/bis.png');
            else if(piece == 'king') return require('./../imgs/black/king.png');
        }else{
            if(piece == 'pawn') return require('./../imgs/white/pawn.png');
            else if(piece == 'tower') return require('./../imgs/white/tower.png');
            else if(piece == 'queen') return require('./../imgs/white/queen.png');
            else if(piece == 'horse') return require('./../imgs/white/horse.png');
            else if(piece == 'bis') return require('./../imgs/white/bis.png');
            else if(piece == 'king') return require('./../imgs/white/king.png');
        }
    }
    return (
        <ImageBackground source={getSrc(colorPiece,piece)} style={stylePiece} ></ImageBackground>
    )
}

export class Piece {
    constructor(type,row, column, color){
        this.type = type;
        this.row = row;
        this.column = column;
        this.color = color;
        this.moves = 0;
    }

    increaseMoves = () => {
        this.moves++;
    }

    getMoves = () => { this.moves }
    
    setPos = (row,column) => {
        this.row = row;
        this.column = column;
    }

    enemy = (board, row, col) => { //verify if the piece in board[row][col] is an enemy
        return board[row][col].piece.color != this.color;
    }

    ableToMove = (board, row, col) => { //verify if an square is able to move
        if(row < 0 || row > 7 || col < 0 || col > 7) return false;
        else return !board[row][col].hasPiece || this.enemy(board, row, col);
    }

    move = (board, row, column) => {
        var pieceKilled = board[row][column].piece;
        if(board[row][column].able) board[row][column].piece = board[this.row][this.column].piece;
        else return { board, pieceKilled };
        board[this.row][this.column].hasPiece = false;
        board[this.row][this.column].piece = null;
        this.setPos(row,column);
        this.increaseMoves();
        board[row][column].hasPiece = true;
        return [ board, pieceKilled ];
    }
}

const styles = StyleSheet.create({
    piece: {
        height: params.blockSize,
        width: params.blockSize,
    }
})