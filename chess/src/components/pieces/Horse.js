import { Piece } from "./../Piece";

export default class Horse extends Piece{
    constructor(type,row, column, color){
        super(type,row, column, color);
    }

    validatePos = (row, col) => {
        return Math.abs(this.row - row) != Math.abs(this.column - col);
    }

    possiblesMoves = (board) => {
        const rows = [this.row+1,this.row-1,this.row+2, this.row-2];
        const cols = [this.column+1,this.column-1,this.column+2, this.column-2];

        rows.forEach((r,row) => {
            cols.forEach((c,col) => {
                if(this.ableToMove(board,r,c) && this.validatePos(r,c)) board[r][c].able = true;
            })
        })
        return board;
    }
}
