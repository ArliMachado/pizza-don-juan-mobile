import { colors, metrics } from '~/styles';

import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  height: ${54 + getStatusBarHeight()};
  padding-top: ${getStatusBarHeight()};
  background-color: ${colors.transparent};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${metrics.basePadding};
`;

export const Title = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: ${colors.white};
`;

export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: '#0b2031',
})``;

export const History = styled(Icon)`
  color: ${colors.white};
  background-color: ${colors.transparent};
`;

// criar bag-container com as config abaixo

export const BagContainer = styled.View`
  border-color: ${colors.primary};
  border-radius: ${metrics.screenWidth * 0.075};
  height: ${metrics.screenWidth * 0.15};
  width: ${metrics.screenWidth * 0.15};
  background-color: ${colors.red};
  justify-content: center;
  align-items: center;
`;

export const Bag = styled(Icon)`
  color: ${colors.white};
`;
