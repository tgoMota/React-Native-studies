import React , {Component} from 'react'
import {View, StyleSheet, Alert, Text } from 'react-native'
import Field from './components/Field'
import { createChessBoard, cloneBoard, resetBoard } from './functions'
import Score from './components/Score'


export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = this.createState();
    }

    createState = () => {
        return {
            board: createChessBoard(8,8),
            wonPlayer1: false,
            wonPlayer2: false,
            hasMove: false,
            pieceMoving: null,
            turnsWhite: true,
            scoreBlack: Array(0),
            scoreWhite: Array(0)
        }
    }

    turnVerify = (row, column) => { //whites plays on white turn ... 
        if(this.state.board[row][column].piece.color == 'white' && this.state.turnsWhite) return true; //white plays
        else if(this.state.board[row][column].piece.color == 'black' && !this.state.turnsWhite) return true; //black plays
        else return false; //its not your turn, be honest
    }

    onOpenField = (row,column) => { //open square
        var board = cloneBoard(this.state.board);
        var hasMove = false;
        var pieceMoving = this.state.pieceMoving;
        var turnsWhite = this.state.turnsWhite;
        var pieceKilled = null;
        if(!this.state.hasMove) { //there wasn't piece in movement before open this field
            if(!board[row][column].hasPiece || !this.turnVerify(row,column)) return null; //if the player is trying to move a enemy player or a invalid square
            board = board[row][column].piece.possiblesMoves(board); //search for the possible moves of the choosen piece
            pieceMoving = board[row][column].piece; //now, the choosen piece is in moviment
            hasMove = true; //indicate that the player is moving one piece
        }else{ //there was a piece in moviment before open this field
            if(board[row][column].hasPiece && !pieceMoving.enemy(board,row,column)){ //can't kill the ally piece //nothing to do here
                board = resetBoard(board); //reset the board to normal state
                this.setState({board,hasMove});
            }
            if(row == pieceMoving.row && column == pieceMoving.column || !board[row][column].able) return null; //move to the self place or invalid place
            if(!board[row][column].hasPiece || pieceMoving.enemy(board, row, column)) [ board, pieceKilled ] = pieceMoving.move(board, row, column); //enemy or there's no piece on that place
            board = resetBoard(board); //movement done, refresh the board
            turnsWhite = !turnsWhite; //swipe turn
        }
        this.refreshScore(pieceKilled);
        this.setState({board, hasMove, pieceMoving , turnsWhite});
      }
      
    onSelectField = (row, column) => {
        const board = cloneBoard(this.state.board);
    }

    refreshScore = (pieceKilled) => {
        if(pieceKilled == null) return; //doesn't need refresh // no pieces were killed
        if(pieceKilled.color == 'black'){ //black pieces killeds on scoreWhite // white pieces killeds on scoreBlack
             var scoreWhite = this.state.scoreWhite;
             scoreWhite.push(pieceKilled);
             this.setState({scoreWhite});
        }
        else {
            var scoreBlack = this.state.scoreBlack;
            scoreBlack.push(pieceKilled);
            this.setState({scoreBlack});
        }
    }

    render(){
        const turn = this.state.turnsWhite ? 'white' : 'black';
        return (
            <View>
                <Score pieces={this.state.scoreBlack}></Score>
                <Field style={styles.board} board = {this.state.board } onOpenField={this.onOpenField} onSelectField={this.onSelectField}></Field>
                <Score pieces={this.state.scoreWhite}></Score>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
      },
      board: {
        alignItems: 'center',
        backgroundColor: '#AAA',
      }
})
