import { colors, metrics } from '~/styles';

import styled from 'styled-components/native';
import Button from '~/components/Button';

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
  font-size: 16px;
  color: ${colors.darker};
  margin-top: ${metrics.baseMargin};
`;

export const Observation = styled(Input)`
  height: 150px;
  padding-top: 15;
`;

export const RoadContent = styled.View`
  flex-direction: row;
`;
export const Road = styled(Input)`
  width: ${metrics.screenWidth * 0.6};
  margin-right: ${metrics.baseMargin};
`;
export const Number = styled(Input)`
  flex: 1;
`;

export const ButtonContent = styled.View`
  flex-direction: row;
  margin-top: ${metrics.baseMargin * 2};
  justify-content: flex-end;
`;

export const FinishButton = styled(Button)`
  width: ${metrics.screenWidth};
`;
