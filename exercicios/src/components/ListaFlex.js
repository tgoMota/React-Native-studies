import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: "João", nota: 9.0 },
    { id: 2, nome: "Moão", nota: 7.0 },
    { id: 3, nome: "Tub", nota: 5.5 },
    { id: 4, nome: "Rô", nota: 6.0 },
    { id: 5, nome: "Juh", nota: 4.5 },
    { id: 6, nome: "Maria", nota: 3.0 },
    { id: 7, nome: "Fulmiu", nota: 6.0 },
    { id: 8, nome: "Koão", nota: 8.0 },
    { id: 9, nome: "Felipe", nota: 2.0 },
    { id: 10, nome: "Roberto", nota: 10.0 },
    { id: 11, nome: "Koão", nota: 9.0 },
    { id: 12, nome: "Gabriel", nota: 7.0 },
    { id: 13, nome: "Tubil", nota: 5.5 },
    { id: 14, nome: "Ronaldo", nota: 6.0 },
    { id: 15, nome: "Juliete", nota: 4.5 },
    { id: 16, nome: "Keyse", nota: 3.0 },
    { id: 17, nome: "Joyce", nota: 6.0 },
    { id: 18, nome: "Larissa", nota: 8.0 },
    { id: 19, nome: "Poly", nota: 2.0 },
    { id: 20, nome: "Lorena", nota: 10.0 },
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 65,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    //Flex
    alignItems: 'center',
    justifyContent: 'center',
}

export const Aluno = props => 
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Aluno {...item}/>
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem = {renderItem}
                keyExtractor={(_,index) => index.toString()}/>
        </ScrollView>
    )
}