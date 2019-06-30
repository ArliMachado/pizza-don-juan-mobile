import { colors, metrics, fonts } from '~/styles';

import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius * 2};
  margin-top: ${metrics.baseMargin};
  margin-bottom: ${metrics.baseMargin / 2};
  align-items: center;
  width: ${(metrics.screenWidth - 45) / 2};
  height: 200;
  padding: ${metrics.basePadding}px;
`;

export const Image = styled.Image`
  width: 100;
  height: 100;
`;

export const InfoContent = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: ${fonts.medium};
  font-weight: bold;
  color: ${colors.darker};
`;
export const Price = styled.Text`
  font-size: ${fonts.regular};
  color: ${colors.regular};
`;
