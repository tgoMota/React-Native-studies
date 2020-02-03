import { Piece } from './../Piece';

export default class Bis extends Piece {
    constructor(type,row, column, color){
        super(type,row, column, color);
    }
    possiblesMoves(board){
        //SE
        board[this.row][this.column].moving = true;
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
        
        return board;
    }
}


