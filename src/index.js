import './config/DevToolsConfig';
import './config/ReactotronConfig';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';
import { setNavigator } from './services/navigation';

import { isSignedIn } from './services/auth';

export default class App extends Component {
  // state = {
  //   signed: false,
  //   signLoaded: false,
  // };

  // componentWillMount() {
  //   isSignedIn()
  //     .then(res => this.setState({ signed: res, signLoaded: true }))
  //     .catch(err => alert('Erro'));
  // }

  render() {
    // const { signLoaded, signed } = this.state;

    // if (!signLoaded) {
    //   return null;
    // }

    // console.tron.log(signed);

    // const Layout = createRootNavigator(signed);

    return (
      <Provider store={store}>
        <Routes ref={setNavigator} />
      </Provider>
    );
  }
}
