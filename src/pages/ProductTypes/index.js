import React, { Component } from 'react';

import { View, Text } from 'react-native';
import Container from '~/components/Container';
import Header from '~/components/Header';

// import { Container } from './styles';

export default class ProductTypes extends Component {
  backToProducts() {
    const { navigation } = this.props;
    navigation.navigate('Menu');
  }

  render() {
    return (
      <Container>
        <Header title="Selecione um tipo" navigateTo={this.backToProducts} />
      </Container>
    );
  }
}
