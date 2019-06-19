import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ScrollView, TouchableOpacity } from 'react-native';

import { Creators as ProductTypeActions } from '~/store/ducks/productType';
import Container from '~/components/Container';
import Header from '~/components/Header';
import { Content, Loading } from './styles';
import ListItem from '~/components/ListItem';

class ProductTypes extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    productTypeRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { productTypeRequest } = this.props;
    productTypeRequest();
  }

  backToProducts = () => {
    const { navigation } = this.props;
    navigation.navigate('Menu');
  };

  renderList = () => {
    const { productTypes, producTypeSelected } = this.props;
    return (
      <Content>
        {productTypes.data.map(product => (
          <TouchableOpacity key={product.id} onPress={() => producTypeSelected(product)}>
            <ListItem title={product.title} uri={product.file.url} />
          </TouchableOpacity>
        ))}
      </Content>
    );
  };

  render() {
    const { productTypes } = this.props;

    return (
      <Container>
        <Header title="Selecione um tipo" navigateTo={this.backToProducts} />
        <ScrollView>{productTypes.loading ? <Loading /> : this.renderList()}</ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  productTypes: state.productType,
  product: state.product,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductTypeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductTypes);
