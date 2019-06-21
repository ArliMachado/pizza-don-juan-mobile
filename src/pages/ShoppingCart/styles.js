import { colors, metrics } from '~/styles';

import styled from 'styled-components/native';

export const Content = styled.View`
  flex-direction: column;
  width: ${metrics.screenWidth - 30};
  margin-left: 15;
  align-content: center;
  justify-content: center;
`;
