import { colors, metrics } from '~/styles';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
`;

export const ListContent = styled.View`
  background-color: ${colors.transparent};
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 25%;
`;
