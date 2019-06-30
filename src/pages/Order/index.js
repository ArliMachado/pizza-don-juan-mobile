import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    order: PropTypes.shape({
      address: PropTypes.shape({
        street: PropTypes.string,
        number: PropTypes.string,
        city: PropTypes.string,
      }),
      observation: PropTypes.string,
      totalValue: PropTypes.number.isRequired,
    }).isRequired,
    cepRequest: PropTypes.func.isRequired,
    orderRequest: PropTypes.func.isRequired,
    setObservation: PropTypes.func.isRequired,
    setStreet: PropTypes.func.isRequired,
    setNumber: PropTypes.func.isRequired,
    setCity: PropTypes.func.isRequired,
  };

  state = {
    cep: '',
  };

  backToPage = (page) => {
    const { navigation } = this.props;
    navigation.navigate(page);
  };

  handleCepRequest = async () => {
    const { cep } = this.state;
    const { cepRequest } = this.props;

    cepRequest(cep);
  };

  handleOrderCreate = () => {
    const { orderRequest } = this.props;

    orderRequest();
  };

  render() {
    const { cep } = this.state;

    const {
      order, setObservation, setStreet, setNumber, setCity,
    } = this.props;

    return (
      <Container>
        <Header
          title="Realizar pedido"
          navigateTo={() => this.backToPage('ShoppingCart')}
          totalValue={order.totalValue}
        />
        <Content>
          <Observation
            multiline
            numberOfLines={5}
            placeholder="Alguma observação?"
            value={order.observation}
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
            <FinishButton text="FINALIZAR" onpress={this.handleOrderCreate} />
          </ButtonContent>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);
