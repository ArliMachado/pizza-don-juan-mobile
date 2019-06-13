import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { ImageBackground } from './styles';

import HeaderBackground from '~/assets/header-background.png';
import Header from '~/components/Header';

class Menu extends Component {
  render() {
    return (
      <ImageBackground source={HeaderBackground}>
        <Header title="Pizzaria Don Juan" />
        <View>
          <Text>Teste</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default Menu;
