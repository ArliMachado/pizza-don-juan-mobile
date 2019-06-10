import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Auth from './pages/Auth';
import Register from './pages/Register';

const Routes = createAppContainer(
  createSwitchNavigator({
    Auth,
    Register,
  }),
);
export default Routes;
