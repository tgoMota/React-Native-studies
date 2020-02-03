import React, {Component} from 'react'
import {View, StyleSheet, Alert, Text, Dimensions } from 'react-native'
import params from '../params';
import Piece from './Piece'

export default props => {
    var killedPieces = Array(2).fill(Array(8));
    killedPieces[0] = props.pieces.slice(0,8);
    killedPieces[1] = props.pieces.slice(8);

    const rows = killedPieces.map((x,i) =>{
        const columns = x.map((y,j) => {
            return <Piece style={styles.pic} colorPiece={y.color} piece={y.type} key={j}/>
        })
        return <View key={i} style={{flexDirection: 'row'}}>{columns}</View>
    })
    return <View style={styles.bar}>{rows}</View>
}

const styles = StyleSheet.create({
    bar: {
        height: (Dimensions.get('window').height - 9*params.blockSize)/2
    },
    pic: {
        width: params.blockSize/5,
        height: params.blockSize/5,
    }
})