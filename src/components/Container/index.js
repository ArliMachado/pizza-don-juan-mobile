import React from 'react';

import { ImageBackground, Content } from './styles';
import HeaderBackground from '~/assets/header-background.png';

const Container = props => (
  <Content>
    <ImageBackground source={HeaderBackground} resizeMode="cover">
      {props.children}
    </ImageBackground>
  </Content>
);

export default Container;
