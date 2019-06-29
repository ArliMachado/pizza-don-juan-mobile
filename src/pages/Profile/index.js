import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as ProfileActions } from '~/store/ducks/profile';

import Container from '~/components/Container';
import Header from '~/components/Header';

import { ScrollView } from 'react-native';
import ListOrders from './OrderList';

// import { Container } from './styles';

class Profile extends Component {
  componentWillMount() {
    const { requestOrders } = this.props;
    requestOrders();
  }

  handleBackToProducts = () => {
    const { navigation } = this.props;
    navigation.navigate('Product');
  };

  render() {
    const { profile } = this.props;

    return (
      <Container>
        <Header title="Meus pedidos" navigateTo={this.handleBackToProducts} />
        <ScrollView>
          {profile.data.map(order => (
            <ListOrders key={order.id} data={order} />
          ))}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProfileActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
