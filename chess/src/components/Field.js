import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'

export default props => {
    const rows = props.board.map((row,r)=>{
        const colums = row.map((square, c)=> {
            return <Square {...square} key={c} 
                onOpen={() => props.onOpenField(r, c)}
                onSelect={e => props.onSelectField(r,c)}
            />
        })
        return <View key={r} style={{flexDirection: 'row'}}>{colums}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        
    }
})