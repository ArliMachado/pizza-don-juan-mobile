import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Auth from './pages/Auth';
import Register from './pages/Register';
import Menu from './pages/Menu';
import AuthLoadingScreen from './pages/AuthLoading';

const AppStack = createStackNavigator(
  {
    Menu,
  },
  {
    headerMode: 'none',
  },
);
const AuthStack = createStackNavigator(
  {
    SignIn: Auth,
    SignUp: Register,
  },
  {
    headerMode: 'none',
  },
);

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
export default Routes;
