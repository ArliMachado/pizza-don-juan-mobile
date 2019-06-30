import { metrics } from '~/styles';

import styled from 'styled-components/native';
import Button from '~/components/Button';
import { Input } from '~/styles/globalStyles';

export const Content = styled.View`
  flex-direction: column;
  width: ${metrics.screenWidth - 40};
  margin-left: 20;
`;

export const Observation = styled(Input).attrs({
  textAlignVertical: 'top',
})`
  padding-top: ${metrics.basePadding}px;
  height: 150px;
`;

export const StreetContent = styled.View`
  flex-direction: row;
`;
export const Street = styled(Input)`
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
