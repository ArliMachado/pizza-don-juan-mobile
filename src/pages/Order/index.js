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
    cep: '',
  };

  backToPage = (page) => {
    const { navigation } = this.props;
    navigation.navigate(page);
  };

  handleCepRequest = async () => {
    const { cep } = this.state;
    const { order, cepRequest } = this.props;

    cepRequest(cep);
    console.tron.log(JSON.stringify(order.address));
    // this.setState(...order.address);
  };

  render() {
    const { observation, cep } = this.state;

    const {
      order, totalValue, setObservation, setStreet, setNumber, setCity,
    } = this.props;

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
            value={order.address.observation}
            onChangeText={text => setObservation(text)}
          />

          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Qual seu cep?"
            keyboardType="numeric"
            value={cep}
            onChangeText={text => this.setState({ cep: text })}
            onBlur={this.handleCepRequest}
          />

          <StreetContent>
            <Street
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Rua"
              value={order.address.street}
              onChangeText={text => setStreet(text)}
            />
            <Number
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="N°"
              keyboardType="numeric"
              value={order.address.number}
              onChangeText={text => setNumber(text)}
            />
          </StreetContent>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Bairro"
            value={order.address.city}
            onChangeText={text => setCity(text)}
          />
          <ButtonContent>
            <FinishButton text="FINALIZAR" onpress={() => {}} />
          </ButtonContent>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order,
  totalValue:
    state.order.products.length > 0
      ? state.order.products.map(product => product.price).reduce((prev, curr) => prev + curr)
      : 0,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);
