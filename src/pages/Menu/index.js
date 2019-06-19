import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ProductActions } from '~/store/ducks/product';
import { TouchableOpacity, ScrollView } from 'react-native';

import MenuHeader from '~/components/MenuHeader';
import ProductList from './ProductList';
import Container from '~/components/Container';

class Menu extends Component {
  componentWillMount() {
    const { productRequest } = this.props;
    productRequest();
  }

  render() {
    const { product, productSelected } = this.props;
    return (
      <Container>
        <MenuHeader title="Pizzaria Don Juan" />
        <ScrollView>
          {product.data.map(item => (
            <TouchableOpacity key={item.id} onPress={() => productSelected(item)}>
              <ProductList data={item} />
            </TouchableOpacity>
          ))}
        </ScrollView>
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
