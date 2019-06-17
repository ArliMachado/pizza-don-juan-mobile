import { colors, metrics } from '~/styles';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius};
  padding: ${metrics.basePadding}px;
  margin-top: ${metrics.baseMargin};
  align-items: center;
  max-width: ${(metrics.screenWidth - 60) / 2};
`;

export const Title = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${colors.darker};
  margin-top: ${metrics.baseMargin};
`;

export const Image = styled.Image`
  width: 70;
  height: 70;
`;

// https://stackoverflow.com/questions/44608824/click-listener-in-flatlist
