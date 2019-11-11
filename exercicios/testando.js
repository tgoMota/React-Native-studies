import {
      createStackNavigator,
      createAppContainer
    } from 'react-navigation';
import Login from './view/login.js'
import SignUp from './view/signup.js'

const RootStack = createStackNavigator({
    Home: {
      screen: Login
    },
    Signup: {
      screen: SignUp
    }
  });

const App = createAppContainer(RootStack);

export default App;