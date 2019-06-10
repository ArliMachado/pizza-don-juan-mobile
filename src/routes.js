import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import LoginRegister from './pages/LoginRegister';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    LoginRegister,
  }),
);
export default Routes;
