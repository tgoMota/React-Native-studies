import React from 'react'
import { View,StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native'
import params from '../params'
import Piece from './Piece'

export default props => {
    const { hasPiece, colorSquare, piece, able } = props
    var styleField =  [styles.field];
    if(able) styleField.push(styles.able);
    else{
        if(colorSquare == 'black') styleField.push(styles.square1);
        else styleField.push(styles.square2);
    }
    if(hasPiece){        
        return (
            <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onSelect}>
                <View style={styleField}>
                    <Piece colorPiece={piece.color} piece={piece.type}></Piece>
                </View>
            </TouchableWithoutFeedback>
        )
    }else{
        return (
            <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onSelect}>
                <View style={styleField}>
                    
                </View>
            </TouchableWithoutFeedback>
        )
    }
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
        backgroundColor: 'blue'
    }
})