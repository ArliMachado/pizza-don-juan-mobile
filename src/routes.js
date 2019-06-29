import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Auth from './pages/Auth';
import Register from './pages/Register';
import Product from './pages/Product';
import ProductTypes from './pages/ProductTypes';
import ProductSizes from './pages/ProductSizes';
import ShoppingCart from './pages/ShoppingCart';
import Profile from './pages/Profile';
import AuthLoadingScreen from './pages/AuthLoading';
import Order from './pages/Order';

const AppStack = createStackNavigator(
  {
    Profile,
    Product,
    ProductTypes,
    ProductSizes,
    ShoppingCart,
    Order,
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
