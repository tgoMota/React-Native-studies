
import React, {Component} from 'react'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Game from './Game'
import App from '../App'

const Menu = createAppContainer(createDrawerNavigator({
    menu: {
        screen: App,
        navigationOptions: { title : 'Menu'}
    },
    jogo: {
        screen: Game,
        navigationOptions: { title : 'Jogo'}
    }
}));

export default Menu;