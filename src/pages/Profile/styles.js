import { colors, fonts } from '~/styles';

import styled from 'styled-components/native';

export const EmptyProfileContent = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmptyProfileMessage = styled.Text`
  font-size: ${fonts.bigger};
  font-weight: bold;
  color: ${colors.regular};
`;
