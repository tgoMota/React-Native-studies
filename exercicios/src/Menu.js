// import React, { Component } from 'react'
// import { createDrawerNavigator } from 'react-navigation-drawer'
// import Simples from './components/Simples'
// import ParImpar from './components/ParImpar'
// import { Inverter, MegaSena } from './components/Multi'

// export default createDrawerNavigator({
//     MegaSena: {
//         screen: () => <MegaSena numeros={8} />,
//         navigationOptions: { title: 'Mega Sena'}
//     },
//     Inverter: {
//         screen: () => <Inverter texto='React Nativo!'/>
//     },
//     ParImpar: {
//         screen: () => <ParImpar numero={5}/>,
//         navigationOptions: { title: 'Par e Impar' }
//     },
//     Simples: {
//         screen: () => <Simples texto="Flexivel!!!"/>

//     }
// }, { drawerWidth: 300 })

import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'
import Counter from './components/Counter'
import Plataformas from './components/Plataformas'
import ValidarProps from './components/ValidarProps'
import Eventos from './components/Eventos'
import ListaFlex from './components/ListaFlex'

const Menu = createDrawerNavigator({
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'Lista Flex'}
    },
    Eventos: {
        screen: Eventos
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18}/>
    },
    Plataformas: {
        screen: Plataformas
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena'}
    },
    Counter:{
        screen: () => <Counter numero={8}/>
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!'/>
    },
    ParImpar: {
        screen: () => <ParImpar numero={5}/>,
        navigationOptions: { title: 'Par e Impar' }
    },
    Simples: {
        screen: () => <Simples texto="Flexivel!!!"/>
    }
}, { drawerWidth: 300 })

const App = createAppContainer(Menu);
export default App;