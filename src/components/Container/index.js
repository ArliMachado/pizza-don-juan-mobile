import React from 'react';

import { ImageBackground, Content, StatusBar } from './styles';
import HeaderBackground from '~/assets/header-background.png';

const Container = props => (
  <Content>
    <StatusBar />
    <ImageBackground source={HeaderBackground} resizeMode="cover">
      {props.children}
    </ImageBackground>
  </Content>
);

export default Container;
