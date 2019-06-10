import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  goToRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('Register');
  };

  render() {
    return (
      <ImageBackground source={BackgroundLogin}>
        <Container>
          <ContentLogo>
            <Logo source={ImageLogo} />
          </ContentLogo>
          <ContentForm>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Seu email"
              keyboardType="email-address"
            />
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Sua senha"
              secureTextEntry
            />
            <Button>
              <Text>Entrar</Text>
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

export default Auth;
