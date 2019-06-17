import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ProductActions } from '~/store/ducks/product';

import Header from '~/components/Header';
import ListItem from '~/components/ListItem';
import Container from '~/components/Container';

class Menu extends Component {
  componentWillMount() {
    const { productRequest } = this.props;
    productRequest();
  }

  render() {
    const { product } = this.props;
    return (
      <Container>
        <Header title="Pizzaria Don Juan" />
        {product.data.map(item => (
          <ListItem key={item.id} data={item} />
        ))}
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
