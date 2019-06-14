import { colors, metrics } from '~/styles';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${colors.white};
  padding: ${metrics.basePadding};
  margin-top: ${metrics.baseMargin};
`;
