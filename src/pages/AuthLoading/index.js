import React, { Component } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { isSignedIn } from '~/services/auth';
import { navigate } from '~/services/navigation';
import { Container } from './styles';

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    // onSignOut();
    this.verifyToken();
  }

  verifyToken = async () => {
    const isActiveToken = await isSignedIn();
    navigate(isActiveToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <Container>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </Container>
    );
  }
}
