import { colors } from '~/styles';

import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 25%;
`;
export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: '#0b2031',
})``;
