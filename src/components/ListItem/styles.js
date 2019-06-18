import { colors, metrics } from '~/styles';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius};
  /* padding: ${metrics.basePadding}px; */
  margin-top: ${metrics.baseMargin};
  align-items: center;
  margin: ${metrics.baseMargin}px ${metrics.baseMargin * 2}px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 16;
  font-weight: bold;
  color: ${colors.darker};
  margin-top: ${metrics.baseMargin / 2};
`;

export const Image = styled.Image`
  width: 100;
  height: 100;
  /* TODO corrigit porcentagem */
`;

// https://stackoverflow.com/questions/44608824/click-listener-in-flatlist
