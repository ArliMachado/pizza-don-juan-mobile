import React, { Component } from 'react';

import { View, TextInput } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Container from '~/components/Container';
import Header from '~/components/Header';

import { Observation, Content } from './styles';

class PlaceOrder extends Component {
  backToPage = (page) => {
    const { navigation } = this.props;
    navigation.navigate(page);
  };

  render() {
    const { totalValue } = this.props;
    return (
      <Container>
        <Header
          title="Realizar pedido"
          navigateTo={() => this.backToPage('ShoppingCart')}
          totalValue={totalValue}
        />
        <Content>
          <Observation multiline numberOfLines={10} PlaceOrder="Alguma observação?" />
          {/* <TextInput
            multiline
            numberOfLines={10}
            style={{ height: 200, textAlignVertical: 'top', backgroundColor: '#FFF' }}
          /> */}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  totalValue: 0,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(PlaceOrder);
