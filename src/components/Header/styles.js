import { colors, metrics, fonts } from '~/styles';

import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Content = styled.View`
  height: ${54 + getStatusBarHeight()};
  padding-top: ${getStatusBarHeight()};
  background-color: ${colors.transparent};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${metrics.basePadding}px;
`;

export const ContentTitle = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${fonts.big};
  font-weight: bold;
  color: ${colors.white};
`;

export const BackToPage = styled(Icon)`
  color: ${colors.white};
  background-color: ${colors.transparent};
  margin-right: ${metrics.baseMargin};
`;

export const TotalPrice = styled.Text`
  font-size: ${fonts.big};
  font-weight: bold;
  color: ${colors.white};
`;
