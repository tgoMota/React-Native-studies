import React, {Component} from 'react'
import {View, StyleSheet, Alert, Text, Dimensions } from 'react-native'
import params from '../params';
import Piece from './Piece'

export default props => {
    var pcs = Array(2).fill(Array(8).fill(0));
    pcs[0] = props.pieces.slice(0,8);
    pcs[1] = props.pieces.slice(8);

    const rows = pcs.map((x,i) =>{
        const columns = x.map((y,j) => {
            return <Piece style={styles.pic} colorPiece={y.color} piece={y.type} key={j}/>
        })
        return <View key={i} style={{flexDirection: 'row'}}>{columns}</View>
    })

    return <View style={styles.bar}>{rows}</View>
}
//return <Piece colorPiece={x.color} piece={x.type} key={i}></Piece>

const styles = StyleSheet.create({
    bar: {
        height: (Dimensions.get('window').height - 9*params.blockSize)/2
    },
    pic: {
        width: params.blockSize/5,
        height: params.blockSize/5,
    }
})