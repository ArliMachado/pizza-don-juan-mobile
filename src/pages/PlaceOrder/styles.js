import { colors, metrics } from '~/styles';

import styled from 'styled-components/native';

export const Content = styled.View`
  flex-direction: column;
  width: ${metrics.screenWidth - 40};
  margin-left: 20;
  /* justify-content: center; */
`;

export const Observation = styled.TextInput.attrs({
  placeholderTextColor: colors.regular,
})`
line-height: 0;
  font-size: 16;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius * 2};
  padding-top: 15;
  padding: 0 ${metrics.basePadding}px;
  height: 150px;
  font-size: 16px;
  color: ${colors.darker};
  /* margin-top: ${metrics.baseMargin}; */
`;
