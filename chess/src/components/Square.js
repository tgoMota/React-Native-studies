import React from 'react'
import { View,StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native'
import params from '../params'
import Piece from './Piece'

export default props => {
    const { hasPiece, colorSquare, piece, able, moving } = props
    var styleField =  [styles.field];
    if(colorSquare == 'black') styleField.push(styles.square1);
    else styleField.push(styles.square2);
    if(moving || able) styleField.push(styles.able);
    
    const pieceView = hasPiece? <Piece colorPiece={piece.color} piece={piece.type}></Piece> : null
    return (
        <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onSelect}>
            <View style={styleField}>{pieceView}</View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
    },
    square1: {
        backgroundColor: '#c6aa82'
    },
    square2: {
        backgroundColor: '#59380d'
    },
    able : {
        // backgroundColor: 'blue',
        borderWidth: 1.5,
        borderColor: 'white'
    },
    moving: {
        // backgroundColor: 'red'
    }
})