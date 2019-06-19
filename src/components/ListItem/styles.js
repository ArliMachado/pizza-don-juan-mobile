import { colors, metrics } from '~/styles';

import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius * 2};
  margin-top: ${metrics.baseMargin};
  margin-bottom: ${metrics.baseMargin / 2};
  align-items: center;
  width: ${(metrics.screenWidth - 45) / 2};
  padding: ${metrics.basePadding}px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 16;
  font-weight: bold;
  color: ${colors.darker};
`;

export const Image = styled.Image`
  width: 100;
  height: 100;
`;
