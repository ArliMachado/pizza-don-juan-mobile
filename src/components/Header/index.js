import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container, Title, StatusBar, History, Bag,
} from './styles';

const Header = ({ title }) => (
  <Container>
    <StatusBar />
    <History name="history" size={24} />
    <Title>{title}</Title>
    <Bag name="shopping-bag" size={18} />
  </Container>
);

export default Header;
