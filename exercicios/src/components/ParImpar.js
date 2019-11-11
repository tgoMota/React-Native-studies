import React from 'react'
import { View,Text } from 'react-native'
import Pad from '../styles/Pad'

export default props =>
    <View>{
        props.numero % 2 == 0 ? <Text style={Pad.ex}>Par!!!</Text> : <Text style={Pad.ex}>Impar!!!</Text>
    }
    </View>