import { colors, metrics, fonts } from '~/styles';

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${colors.white};
  padding: 0 ${metrics.basePadding}px;
  margin: ${metrics.baseMargin}px ${metrics.baseMargin * 2}px;
  border-radius: ${metrics.baseRadius * 2};
  height: 85px;
  border-width: 0.5;
  border-color: ${colors.lighter};
`;

export const ImageContent = styled.View`
  margin-right: ${metrics.baseMargin};
  justify-content: center;
`;

export const Image = styled.Image`
  width: 70;
  height: 70;
`;
export const ProductInfo = styled.View`
  flex: 1;
  flex-direction: column;
`;
export const ProductTitle = styled.Text`
  font-size: ${fonts.regular};
  font-weight: bold;
  margin-top: ${metrics.baseMargin / 2};
  color: ${colors.primary};
`;
export const ProductDescription = styled.Text`
  font-size: ${fonts.small};
  color: ${colors.regular};
  margin-top: ${metrics.baseMargin / 2};
`;

export const EstimativeTimeContent = styled.View`
  flex-direction: row;
  margin-top: ${metrics.baseMargin / 2};
`;
export const IconTime = styled(Icon)`
  color: ${colors.regular};
`;
export const EstimativeTime = styled.Text`
  font-size: ${fonts.smaller};
  margin-left: ${metrics.baseMargin / 4};
  color: ${colors.regular};
`;
