import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Auth from './pages/Auth';
import Register from './pages/Register';
import Menu from './pages/Menu';

const Routes = createAppContainer(
  createSwitchNavigator({
    Auth,
    Register,
    Menu,
  }),
);
export default Routes;
