import { Piece } from "./../Piece";

export default class King extends Piece{
    constructor(type,row, column, color){
        super(type,row, column, color);
    }
    possiblesMoves = (board) => {
        const rows = [this.row-1, this.row, this.row+1];
        const cols = [this.column-1, this.column ,this.column+1];
        rows.forEach((r,row) => {
            cols.forEach((c,col) => {
                if(this.ableToMove(board,r,c)) board[r][c].able = true;
            })
        })
        return board;
    }
}
