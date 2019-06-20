import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Auth from './pages/Auth';
import Register from './pages/Register';
import Product from './pages/Product';
import ProductTypes from './pages/ProductTypes';
import ProductSizes from './pages/ProductSizes';
import AuthLoadingScreen from './pages/AuthLoading';

const AppStack = createStackNavigator(
  {
    Product,
    ProductTypes,
    ProductSizes,
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
