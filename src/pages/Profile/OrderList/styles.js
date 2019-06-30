import { colors, metrics, fonts } from '~/styles';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${colors.white};
  padding: 0 ${metrics.basePadding}px;
  margin: ${metrics.baseMargin}px ${metrics.baseMargin * 2}px;
  border-radius: ${metrics.baseRadius * 2};
  height: 100px;
  border-width: 0.5;
  border-color: ${colors.lighter};
`;

export const OrderTitle = styled.Text`
  font-size: ${fonts.regular};
  color: ${colors.primary};
  margin-top: ${metrics.baseMargin};
`;

export const OrderDate = styled.Text`
  font-size: ${fonts.regular};
  color: ${colors.regular};
  margin-top: ${metrics.baseMargin / 2};
`;

export const OrderValue = styled.Text`
  font-size: ${fonts.medium};
  font-weight: bold;
  color: ${colors.primary};
  margin-top: ${metrics.baseMargin / 2};
`;
