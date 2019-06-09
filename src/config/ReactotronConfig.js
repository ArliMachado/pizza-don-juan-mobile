import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const hostHome = '192.168.1.107';

  const tron = Reactotron.configure({ host: hostHome })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  tron.clear();
  console.tron = tron;
}
