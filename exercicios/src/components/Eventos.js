import React, {Component} from 'react'
import {View, Text, TextInput } from 'react-native'
import Pad from '../styles/Pad'

export default class Eventos extends Component {
    state = {
        texto : ''
    }

    alterarTexto = texto => {
        this.setState({texto: texto})
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 50}}>{this.state.texto}</Text>
                <TextInput value={this.state.texto} style={Pad.input} onChangeText={this.alterarTexto}/>
            </View>
        )
    }
}