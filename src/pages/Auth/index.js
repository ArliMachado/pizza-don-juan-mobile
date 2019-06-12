import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from '~/store/ducks/auth';

import {
  ImageBackground,
  Container,
  ContentLogo,
  Logo,
  ContentForm,
  Input,
  Button,
  Text,
  LinkText,
} from './styles';
import BackgroundLogin from '~/assets/background_login.png';
import ImageLogo from '~/assets/logo.png';

class Auth extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  goToRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('Register');
  };

  signedIn = () => {
    const { authRequest } = this.props;
    const { email, password } = this.state;
    authRequest({ email, password });
  };

  render() {
    const { auth } = this.props;
    const { email, password } = this.state;

    return (
      <ImageBackground source={BackgroundLogin}>
        <Container>
          <ContentLogo>
            <Logo source={ImageLogo} />
          </ContentLogo>
          <ContentForm>
            <Input
              value={email}
              onChangeText={text => this.setState({ email: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Seu email"
              keyboardType="email-address"
            />
            <Input
              value={password}
              onChangeText={text => this.setState({ password: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Sua senha"
              secureTextEntry
            />
            <Button onPress={this.signedIn}>
              {auth.loading ? <ActivityIndicator size="small" color="#FFF" /> : <Text>Entrar</Text>}
            </Button>
            <LinkText onPress={this.goToRegister}>
              <Text>Criar conta gratuita</Text>
            </LinkText>
          </ContentForm>
        </Container>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
