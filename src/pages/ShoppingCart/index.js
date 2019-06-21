import React, { Component } from 'react';

import { ScrollView } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as ShoppingCartActions } from '~/store/ducks/shoppingCart';

import Container from '~/components/Container';
import Header from '~/components/Header';
import Button from '~/components/Button';

import {
  Content, ButtonContent, IconContent, CartIcon,
} from './styles';
import CartList from './CartList';

class ShoppingCart extends Component {
  backToProductSizes = () => {
    const { navigation } = this.props;
    navigation.navigate('ProductSizes');
  };

  listCart = () => {
    const { shoppingCart } = this.props;
    return (
      <ScrollView>
        <Content>
          {shoppingCart.items.map(item => (
            <CartList key={Math.random()} data={item} />
          ))}
        </Content>
      </ScrollView>
    );
  };

  render() {
    const { shoppingCart, totalValue } = this.props;

    return (
      <Container>
        <Header title="Carrinho" navigateTo={this.backToProductSizes} totalValue={totalValue} />
        {this.listCart()}
        <ButtonContent>
          <IconContent>
            <CartIcon name="cart-plus" size={20} />
          </IconContent>
          <Button text="REALIZAR PEDIDO" />
        </ButtonContent>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart,
  totalValue: state.shoppingCart.items.map(item => item.price).reduce((prev, curr) => prev + curr),
});

const mapDispatchToProps = dispatch => bindActionCreators(ShoppingCartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCart);
