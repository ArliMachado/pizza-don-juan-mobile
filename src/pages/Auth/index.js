import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from '~/store/ducks/auth';

import {
  ImageBackground,
  Container,
  ContentLogo,
  Logo,
  ContentForm,
  Button,
  Text,
  LinkText,
  Loading,
} from './styles';
import { Input } from '~/styles/globalStyles';
import BackgroundLogin from '~/assets/background_login.png';
import ImageLogo from '~/assets/logo.png';

class Auth extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    authRequest: PropTypes.func.isRequired,
    auth: PropTypes.shape({
      loading: PropTypes.bool,
    }).isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  goToRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('SignUp');
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
              {auth.loading ? <Loading /> : <Text>Entrar</Text>}
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
