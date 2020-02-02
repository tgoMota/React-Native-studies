import { Piece } from "./../Piece";

export default class Pawn extends Piece{
    constructor(type,row, column, color){
        super(type,row, column, color);
        pawnSuper = false; //move for any side
    }
    possiblesMoves = (board) => {
        if(this.color == 'black'){
            if(this.ableToMove(board, this.row+1, this.column) && !board[this.row+1][this.column].hasPiece) {
                board[this.row+1][this.column].able = true;
                if(board[this.row][this.column].piece.moves == 0){
                    if(this.ableToMove(board, this.row+2, this.column)) board[this.row+2][this.column].able = true;
                }
            }
            if(this.ableToMove(board, this.row+1, this.column+1) && board[this.row+1][this.column+1].hasPiece) board[this.row+1][this.column+1].able = true;
            if(this.ableToMove(board, this.row+1, this.column-1) && board[this.row+1][this.column-1].hasPiece) board[this.row+1][this.column-1].able = true;
        }else{ //white
            if(this.ableToMove(board, this.row-1, this.column) && !board[this.row-1][this.column].hasPiece) {
                board[this.row-1][this.column].able = true;
                if(board[this.row][this.column].piece.moves == 0){
                    if(this.ableToMove(board, this.row-2, this.column)) board[this.row-2][this.column].able = true;
                }
            }
            if(this.ableToMove(board, this.row-1, this.column+1) && board[this.row-1][this.column+1].hasPiece) board[this.row-1][this.column+1].able = true;
            if(this.ableToMove(board, this.row-1, this.column-1) && board[this.row-1][this.column-1].hasPiece) board[this.row-1][this.column-1].able = true;
        }
        return board;
    }
}


