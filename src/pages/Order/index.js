import React, { Component } from 'react';

import { View } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Container from '~/components/Container';
import Header from '~/components/Header';
import Button from '~/components/Button';

import {
  Observation,
  Content,
  Input,
  RoadContent,
  Road,
  Number,
  ButtonContent,
  FinishButton,
} from './styles';

class Order extends Component {
  backToPage = (page) => {
    const { navigation } = this.props;
    navigation.navigate(page);
  };

  render() {
    const { totalValue } = this.props;
    return (
      <Container>
        <Header
          title="Realizar pedido"
          navigateTo={() => this.backToPage('ShoppingCart')}
          totalValue={totalValue}
        />
        <Content>
          <Observation
            style={{ textAlignVertical: 'top' }}
            multiline
            numberOfLines={5}
            placeholder="Alguma observação?"
          />

          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Qual seu cep?"
            keyboardType="numeric"
          />

          <RoadContent>
            <Road autoCapitalize="none" autoCorrect={false} placeholder="Rua" />
            <Number
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="N°"
              keyboardType="numeric"
            />
          </RoadContent>
          <Input autoCapitalize="none" autoCorrect={false} placeholder="Bairro" />
          <ButtonContent>
            <FinishButton text="FINALIZAR" onpress={() => {}} />
          </ButtonContent>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  totalValue: 0,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Order);
