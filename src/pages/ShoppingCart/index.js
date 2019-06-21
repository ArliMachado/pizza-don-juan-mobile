import React, { Component } from 'react';

import { ScrollView, TouchableOpacity } from 'react-native';

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
  backToPage = (page) => {
    const { navigation } = this.props;
    navigation.navigate(page);
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
        <Header
          title="Carrinho"
          navigateTo={() => this.backToPage('ProductSizes')}
          totalValue={totalValue}
        />
        {this.listCart()}
        <ButtonContent>
          <IconContent>
            <TouchableOpacity onPress={() => this.backToPage('Product')}>
              <CartIcon name="cart-plus" size={20} />
            </TouchableOpacity>
          </IconContent>
          <Button text="REALIZAR PEDIDO" />
        </ButtonContent>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart,
  totalValue: 0, // state.shoppingCart.items.map(item => item.price).reduce((prev, curr) => prev + curr),
});

const mapDispatchToProps = dispatch => bindActionCreators(ShoppingCartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCart);
