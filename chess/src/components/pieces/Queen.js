import { Piece } from "./../Piece";

export default class Queen extends Piece{
    constructor(type,row, column, color){
        super(type,row,column,color);
    }
    possiblesMoves = (board) => {
        //SE
        for(var i = this.row+1, j = this.column+1 ; i < 8 && j < 8 ; ++i, ++j){
            if(this.ableToMove(board, i, j)) {
                board[i][j].able = true;
                if(board[i][j].hasPiece) break;
            }
            else break;
        }

        //SW
        for(var i = this.row+1, j = this.column-1 ; i < 8 && j >= 0 ; ++i, --j){
            if(this.ableToMove(board, i, j)) {
                board[i][j].able = true;
                if(board[i][j].hasPiece) break;
            }
            else break;
        }

        //NE
        for(var i = this.row-1, j = this.column+1 ; i >= 0 && j < 8 ; --i, ++j){
            if(this.ableToMove(board, i, j)) {
                board[i][j].able = true;
                if(board[i][j].hasPiece) break;
            }
            else break;
        }

        //NW
        for(var i = this.row-1, j = this.column-1 ; i >= 0 && j >= 0 ; --i, --j){
            if(this.ableToMove(board, i, j)) {
                board[i][j].able = true;
                if(board[i][j].hasPiece) break;
            }
            else break;
        }

        //N
        for(var i = this.row-1, j = this.column ; i >= 0 ; --i){
            if(this.ableToMove(board, i, j)) {
                board[i][j].able = true;
                if(board[i][j].hasPiece) break;
            }
            else break;
        }

        //S
        for(var i = this.row+1, j = this.column ; i < 8 ; ++i){
            if(this.ableToMove(board, i, j)) {
                board[i][j].able = true;
                if(board[i][j].hasPiece) break;
            }
            else break;
        }

        //E
        for(var j = this.column+1, i = this.row ; j < 8 ; ++j){
            if(this.ableToMove(board, i, j)) {
                board[i][j].able = true;
                if(board[i][j].hasPiece) break;
            }
            else break;
        }

        //W
        for(var j = this.column-1, i = this.row ;j >= 0; --j){
            if(this.ableToMove(board, i, j)) {
                board[i][j].able = true;
                if(board[i][j].hasPiece) break;
            }
            else break;
        }

        return board;
    }
}
