import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Types as ProductTypeActions } from '~/store/ducks/productType';
import Container from '~/components/Container';
import Header from '~/components/Header';

// import { Container } from './styles';

class ProductTypes extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  backToProducts = () => {
    const { navigation } = this.props;
    navigation.navigate('Menu');
  };

  render() {
    return (
      <Container>
        <Header title="Selecione um tipo" navigateTo={this.backToProducts} />
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
