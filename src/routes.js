import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Auth from './pages/Auth';
import LoginRegister from './pages/LoginRegister';

const Routes = createAppContainer(
  createSwitchNavigator({
    Auth,
    LoginRegister,
  }),
);
export default Routes;
