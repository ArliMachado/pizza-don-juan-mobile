import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    CadastroUsuario,
  }),
);
export default Routes;
