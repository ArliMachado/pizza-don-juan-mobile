import React, { Component } from 'react';

import { ScrollView, TouchableOpacity } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as ProductSizeActions } from '~/store/ducks/ProductSize';
import Container from '~/components/Container';
import Header from '~/components/Header';
import ListItem from '~/components/ListItem';

import { Content, Loading } from './styles';

class ProductSizes extends Component {
  componentDidMount() {
    const { productSizeRequest } = this.props;
    productSizeRequest();
  }

  backToProductTypes = () => {
    const { navigation } = this.props;
    navigation.navigate('ProductTypes');
  };

  renderList = () => {
    const { productSizes, productSizeSelected } = this.props;
    return (
      <Content>
        {productSizes.data.map(product => (
          <TouchableOpacity key={product.id} onPress={() => productSizeSelected(product)}>
            <ListItem title={product.title} uri={product.file.url} price={product.price} />
          </TouchableOpacity>
        ))}
      </Content>
    );
  };

  render() {
    const { productSizes } = this.props;

    return (
      <Container>
        <Header title="Selecione um tamanho" navigateTo={this.backToProductTypes} />
        <ScrollView>{productSizes.loading ? <Loading /> : this.renderList()}</ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  productSizes: state.productSize,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductSizeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductSizes);
