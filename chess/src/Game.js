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
        if(this.state.board[row][column].piece.color == 'white' && this.state.turnsWhite) return true;
        else if(this.state.board[row][column].piece.color == 'black' && !this.state.turnsWhite) return true;
        else return false;
    }

    onOpenField = (row,column) => { //open square
        var board = cloneBoard(this.state.board);
        var hasMove = false;
        var pieceMoving = this.state.pieceMoving;
        var turnsWhite = this.state.turnsWhite;
        var pieceKilled = null;
        if(!this.state.hasMove) {
            if(!board[row][column].hasPiece || !this.turnVerify(row,column)) return null;
            board = board[row][column].piece.possiblesMoves(board);
            pieceMoving = board[row][column].piece;
            hasMove = true;
        }else{
            if(board[row][column].hasPiece && !pieceMoving.enemy(board,row,column)){
                board = resetBoard(board);
                this.setState({board,hasMove});
            }
            if(row == pieceMoving.row && column == pieceMoving.column || !board[row][column].able) return null;
            if(!board[row][column].hasPiece || pieceMoving.enemy(board, row, column)) [ board, pieceKilled ] = pieceMoving.move(board, row, column);
            turnsWhite = !turnsWhite; //swipe turn
            board = resetBoard(board);
        }
        this.refreshScore(pieceKilled);
        this.setState({board, hasMove, pieceMoving , turnsWhite});
      }
      
    onSelectField = (row, column) => {
        const board = cloneBoard(this.state.board);
    }

    refreshScore = (pieceKilled) => {
        // Alert.alert('pieceKilled: ' + pieceKilled);
        if(pieceKilled == null) return;
        if(pieceKilled.color == 'black'){
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
        var turn = '';
        if(this.state.turnsWhite) turn = 'white';
        else turn = 'black';
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
