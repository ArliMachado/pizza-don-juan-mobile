import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ProductActions } from '~/store/ducks/product';
import { TouchableOpacity, ScrollView } from 'react-native';

import MenuHeader from '~/components/MenuHeader';
import ProductList from './ProductList';
import Container from '~/components/Container';

import { Loading } from './styles';

class Menu extends Component {
  componentWillMount() {
    const { productRequest } = this.props;
    productRequest();
  }

  listProduct = () => {
    const { product, productSelected } = this.props;

    return (
      <ScrollView>
        {product.data.map(item => (
          <TouchableOpacity key={item.id} onPress={() => productSelected(item)}>
            <ProductList data={item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  render() {
    const { product } = this.props;
    return (
      <Container>
        <MenuHeader title="Pizzaria Don Juan" />
        {product.loading ? <Loading /> : this.listProduct()}
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
