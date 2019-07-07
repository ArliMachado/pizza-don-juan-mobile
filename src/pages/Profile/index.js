import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as ProfileActions } from '~/store/ducks/profile';

import Container from '~/components/Container';
import Header from '~/components/Header';

import { ScrollView } from 'react-native';
import ListOrders from './OrderList';

import { EmptyProfileContent, EmptyProfileMessage } from './styles';

class Profile extends Component {
  static propTypes = {
    requestOrders: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    profile: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ).isRequired,
    }).isRequired,
    hasOrders: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    const { requestOrders } = this.props;
    requestOrders();
  }

  handleBackToProducts = () => {
    const { navigation } = this.props;
    navigation.navigate('Product');
  };

  listOrders = () => {
    const { profile } = this.props;
    return (
      <ScrollView>
        {profile.data.map(order => (
          <ListOrders key={order.id} data={order} />
        ))}
      </ScrollView>
    );
  };

  render() {
    const { hasOrders } = this.props;

    return (
      <Container>
        <Header title="Meus pedidos" navigateTo={this.handleBackToProducts} />
        {hasOrders ? (
          this.listOrders()
        ) : (
          <EmptyProfileContent>
            <EmptyProfileMessage>Não há pedidos</EmptyProfileMessage>
          </EmptyProfileContent>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  hasOrders: state.profile.data.length > 0,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProfileActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
