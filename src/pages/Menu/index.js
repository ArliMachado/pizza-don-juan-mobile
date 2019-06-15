import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ProductActions } from '~/store/ducks/product';

import { ImageBackground, Container } from './styles';

import HeaderBackground from '~/assets/header-background.png';
import Header from '~/components/Header';
import ListItem from '~/components/ListItem';

class Menu extends Component {
  componentWillMount() {
    const { productRequest } = this.props;
    productRequest();
  }

  render() {
    const { product } = this.props;
    return (
      <Container>
        <ImageBackground source={HeaderBackground} resizeMode="cover">
          <Header title="Pizzaria Don Juan" />
          {product.data.map(item => (
            <ListItem key={item.id} data={item} />
          ))}
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
