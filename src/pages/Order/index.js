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
    street: '',
    number: '',
    city: '',
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
    const {
      observation, cep, street, number, city,
    } = this.state;

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
            value={observation}
            onChangeText={text => this.setState({ observation: text })}
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
              value={street}
              onChangeText={text => this.setState({ street: text })}
            />
            <Number
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="N°"
              keyboardType="numeric"
              value={number}
              onChangeText={text => this.setState({ number: text })}
            />
          </StreetContent>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Bairro"
            value={city}
            onChangeText={text => this.setState({ city: text })}
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
    state.order.items.length > 0
      ? state.order.items.map(item => item.price).reduce((prev, curr) => prev + curr)
      : 0,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);
