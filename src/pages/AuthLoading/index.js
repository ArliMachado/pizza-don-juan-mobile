import React, { Component } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { isSignedIn, onSignOut } from '~/services/auth';
import { navigate } from '~/services/navigation';

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
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
