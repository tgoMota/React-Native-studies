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
            whoWon: 'null',
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

    check = () => { //check if the king is on danger ( check )
        var board = cloneBoard(this.state.board), lastTurn = this.state.turnsWhite ? 'white' : 'black';
        var [ rowKing, columnKing ] = this.searchTheKing(lastTurn); //position of the king
        for(var i = 0; i < 8 ; ++i){
            for(var j = 0; j < 8 ; ++j){
                var y = board[i][j];
                if(y.hasPiece && y.piece.color == lastTurn) board = y.piece.possiblesMoves(board);
                if(board[rowKing][columnKing].able){
                    Alert.alert('Check'); //one king is in danger
                    return null; //end function
                }
            }
        }
    }

    restartGame = () => {
        this.setState({
            board: createChessBoard(8,8),
            whoWon: 'null',
            hasMove: false,
            pieceMoving: null,
            turnsWhite: true,
            scoreBlack: Array(0),
            scoreWhite: Array(0)
        });
    }

    searchTheKing = (colorKing) => {
        var board = cloneBoard(this.state.board);
        for(var i = 0; i < 8 ; ++i){
            for(var j = 0; j < 8 ; ++j){
                var y = board[i][j];
                if(y.hasPiece && y.piece.color != colorKing && y.piece.type == 'king'){
                    return [y.piece.row, y.piece.column];
                }
            }
        }
    }

    onOpenField = (row,column) => { //open square
        var board = cloneBoard(this.state.board);
        var hasMove = false;
        var pieceMoving = this.state.pieceMoving;
        var turnsWhite = this.state.turnsWhite, turn = this.state.turnsWhite;
        var pieceKilled = null;
        var moved = false;
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
            if(!board[row][column].hasPiece || pieceMoving.enemy(board, row, column)){ //enemy or there's no piece on that place
                 [ board, pieceKilled ] = pieceMoving.move(board, row, column); 
                 moved = true; //one piece moved
            }
            board = resetBoard(board); //movement done, refresh the board
            turnsWhite = !turnsWhite; //swipe turn
        }
        this.refreshScore(pieceKilled);
        this.setState({board, hasMove, pieceMoving , turnsWhite});
        if(moved) this.check();
    }
      
    onSelectField = (row, column) => {
        const board = cloneBoard(this.state.board);
    }

    thereIsAWinner = (pieceKilled) => {
        if(pieceKilled.type == 'king'){
            if(pieceKilled.color == 'white'){
                Alert.alert('Black won the game');
                this.setState({whoWon:'black'});
            }else{
                Alert.alert('White won the game');
                this.setState({whoWon:'white'});
            }
            this.restartGame();
            return true;
        }
        return false;
    }

    refreshScore = (pieceKilled) => {
        if(pieceKilled == null) return; //doesn't need refresh // no pieces were killed
        var scoreWhite = this.state.scoreWhite;
        var scoreBlack = this.state.scoreBlack;
        if(pieceKilled.color == 'black') scoreWhite.push(pieceKilled); //black pieces killeds on scoreWhite 
        else scoreBlack.push(pieceKilled);// white pieces killeds on scoreBlack
        this.setState({scoreWhite, scoreBlack}); //refresh score in the view
        this.thereIsAWinner(pieceKilled); //check if any player won the game
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
