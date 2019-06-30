import { colors, metrics, fonts } from '~/styles';

import styled from 'styled-components/native';

export const Content = styled.View`
  flex-direction: column;
  width: ${metrics.screenWidth - 40};
  margin-left: 20;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.regular,
})`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius * 2};
  letter-spacing: 0;
  padding: 0 ${metrics.basePadding}px;
  height: 52px;
  font-size: ${fonts.medium};
  color: ${colors.primary};
  margin-top: ${metrics.baseMargin};
`;
