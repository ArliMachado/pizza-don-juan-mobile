import { colors, metrics } from '~/styles';

import styled from 'styled-components/native';

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  flex: 1;
  background: ${colors.darkTransparent};
  align-items: stretch;
  justify-content: center;
  padding: 30px;
`;
export const ContentLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${metrics.baseMargin * 2};
`;

export const Logo = styled.Image`
  width: 72px;
  height: 72px;
`;

export const ContentForm = styled.View``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.regular,
})`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius * 2};
  letter-spacing: 0;
  padding: 0 ${metrics.basePadding};
  height: 52px;
  font-size: 16px;
  color: ${colors.darker};
  margin-top: ${metrics.baseMargin};
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.red};
  border-radius: ${metrics.baseRadius * 2};
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: ${metrics.baseMargin * 2};
`;
export const Text = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`;

export const LinkText = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: ${metrics.baseMargin * 2};
`;
