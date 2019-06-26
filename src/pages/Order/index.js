import React, { Component } from 'react';

import { View } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as OrderActions } from '~/store/ducks/order';

import Container from '~/components/Container';
import Header from '~/components/Header';
import {
  Observation,
  Content,
  Input,
  StreetContent,
  Street,
  Number,
  ButtonContent,
  FinishButton,
} from './styles';

class Order extends Component {
  state = {
    observation: '',
    cep: '',
  };

  backToPage = (page) => {
    const { navigation } = this.props;
    navigation.navigate(page);
  };

  render() {
    const { totalValue, cepRequest } = this.props;

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

          <StreetContent>
            <Street autoCapitalize="none" autoCorrect={false} placeholder="Rua" />
            <Number
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="N°"
              keyboardType="numeric"
            />
          </StreetContent>
          <Input autoCapitalize="none" autoCorrect={false} placeholder="Bairro" />
          <ButtonContent>
            <FinishButton text="FINALIZAR" onpress={() => cepRequest('26515440')} />
          </ButtonContent>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order,
  totalValue:
    state.order.items.length > 0
      ? state.order.items.map(item => item.price).reduce((prev, curr) => prev + curr)
      : 0,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);
