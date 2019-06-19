import { metrics } from '~/styles';

import styled from 'styled-components/native';

export const Content = styled.View`
  padding: 0 ${metrics.basePadding / 2}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
