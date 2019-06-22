import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { ScrollView, TouchableOpacity } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as ShoppingCartActions } from '~/store/ducks/shoppingCart';

import Container from '~/components/Container';
import Header from '~/components/Header';
import Button from '~/components/Button';

import {
  Content,
  ButtonContent,
  IconContent,
  CartIcon,
  EmptyCartContent,
  EmptyCartMessage,
} from './styles';
import CartList from './CartList';

class ShoppingCart extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    shoppingCart: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          size: PropTypes.string,
          price: PropTypes.number,
          image: PropTypes.string,
        }),
      ),
    }).isRequired,
    shoppingCartRemove: PropTypes.func.isRequired,
    totalValue: PropTypes.number.isRequired,
    hasItems: PropTypes.bool.isRequired,
  };

  backToPage = (page) => {
    const { navigation } = this.props;
    navigation.navigate(page);
  };

  listCart = () => {
    const { shoppingCart, shoppingCartRemove } = this.props;
    return (
      <Fragment>
        {shoppingCart.items.map(item => (
          <CartList key={Math.random()} data={item} remove={() => shoppingCartRemove(item)} />
        ))}
      </Fragment>
    );
  };

  render() {
    const { totalValue, hasItems } = this.props;

    return (
      <Container>
        <Header
          title="Carrinho"
          navigateTo={() => this.backToPage('ProductSizes')}
          totalValue={totalValue}
        />
        <ScrollView>
          <Content>
            {hasItems ? (
              this.listCart()
            ) : (
              <EmptyCartContent>
                <EmptyCartMessage>Carrinho vazio</EmptyCartMessage>
              </EmptyCartContent>
            )}
          </Content>
        </ScrollView>
        <ButtonContent>
          <IconContent>
            <TouchableOpacity onPress={() => this.backToPage('Product')}>
              <CartIcon name="cart-plus" size={20} />
            </TouchableOpacity>
          </IconContent>
          {hasItems ? (
            <TouchableOpacity>
              <Button text="REALIZAR PEDIDO" />
            </TouchableOpacity>
          ) : null}
        </ButtonContent>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart,
  hasItems: state.shoppingCart.items.length > 0,
  totalValue:
    state.shoppingCart.items.length > 0
      ? state.shoppingCart.items.map(item => item.price).reduce((prev, curr) => prev + curr)
      : 0,
});

const mapDispatchToProps = dispatch => bindActionCreators(ShoppingCartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCart);
