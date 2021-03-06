import { colors, metrics, fonts } from '~/styles';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Content = styled.View`
  flex-direction: column;
  width: ${metrics.screenWidth - 30};
  margin-left: 15;
  align-content: center;
  justify-content: center;
`;

export const ButtonContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${metrics.baseMargin * 4};
  margin-top: ${metrics.baseMargin * 2};
  padding: 0 ${metrics.basePadding}px;
`;

export const IconContent = styled.View`
  border-color: ${colors.primary};
  border-radius: ${metrics.screenWidth * 0.075};
  height: ${metrics.screenWidth * 0.15};
  width: ${metrics.screenWidth * 0.15};
  background-color: ${colors.regular};
  justify-content: center;
  align-items: center;
`;

export const CartIcon = styled(Icon)`
  color: ${colors.white};
`;
export const EmptyCartContent = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const EmptyCartMessage = styled.Text`
  font-size: ${fonts.bigger};
  font-weight: bold;
  color: ${colors.regular};
`;
