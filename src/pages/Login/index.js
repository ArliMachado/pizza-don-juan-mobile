import React from 'react';
import { View } from 'react-native';

import { ImageBackground } from './styles';
import BackgroundLogin from '~/assets/background_login.png';

const Login = () => (
  <View>
    <ImageBackground source={BackgroundLogin} />
  </View>
);

export default Login;
