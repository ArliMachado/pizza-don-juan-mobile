import React, { Component } from 'react';

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

class Login extends Component {
  goToRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('LoginRegister');
  };

  render() {
    return (
      <ImageBackground source={BackgroundLogin}>
        <Container>
          <ContentLogo>
            <Logo source={ImageLogo} />
          </ContentLogo>
          <ContentForm>
            <Input autoCapitalize="none" autoCorrect={false} placeholder="Seu email" />
            <Input autoCapitalize="none" autoCorrect={false} placeholder="Sua senha" />
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

export default Login;
