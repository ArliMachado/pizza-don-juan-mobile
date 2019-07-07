import { colors, metrics, fonts } from '~/styles';

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
  font-size: ${fonts.big};
  font-weight: bold;
`;

export const LinkText = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: ${metrics.baseMargin * 2};
`;
export const MessageError = styled.Text`
  color: ${colors.white};
  text-align: center;
  margin-top: ${metrics.baseMargin}px;
`;
