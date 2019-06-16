import { colors, metrics } from '~/styles';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${colors.white};
  padding: 0 10px;
  margin-top: ${metrics.baseMargin};
  margin: 10px;
  border-radius: ${metrics.baseRadius * 2};
  height: 80px;
  border-width: 0.5;
  border-color: ${colors.lighter};
`;

export const ImageContent = styled.View`
  margin-right: ${metrics.baseMargin};
  justify-content: center;
`;

export const Image = styled.Image`
  width: 65;
  height: 65;
`;
export const ProductInfo = styled.View`
  flex: 1;
  flex-direction: column;
`;
export const ProductTitle = styled.Text`
  font-size: 14;
  font-weight: bold;
  margin-top: ${metrics.baseMargin / 2};
  color: ${colors.darker};
`;
export const ProductDescription = styled.Text`
  font-size: 12;
  color: ${colors.regular};
  margin-top: ${metrics.baseMargin / 2};
`;
