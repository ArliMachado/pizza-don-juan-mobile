import { colors, metrics } from '~/styles';

import styled from 'styled-components/native';

export const ListContent = styled.View`
  background-color: ${colors.transparent};
`;

export const Loading = styled.ActivityIndicator`
  margin-top: ${metrics.baseMargin * 2};
`;
