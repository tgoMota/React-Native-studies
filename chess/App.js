/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, Modal, Alert } from 'react-native'

export default class App extends Component {

  render(){
    return (
      <View>
         <Text style={styles.title}>Chess Game</Text>
         <View style={styles.buttonNewGame}>
            <Button style={styles.buttonNewGame} title="Novo jogo" onPress={()=> Alert.alert('Ainda nao foi implementado')}/>
         </View>
         <View style={styles.buttonConfig}>
            <Button title="Configurações" onPress={()=> Alert.alert('Ainda nao foi implementado')}/>
         </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#5F9EA0',
    height: '10%'
  },
  title: {
    fontSize: 20,
    marginTop: '5%',
    textAlign: 'center',
    fontWeight: 'bold',
    borderBottomColor: 'blue'
  },
  buttonNewGame:{
    marginTop: 200
  },
  buttonConfig: {
    marginTop: 10,
  },
})