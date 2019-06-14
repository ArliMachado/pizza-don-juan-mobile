import React from 'react';

import {
  Container, Title, StatusBar, History, BagContainer, Bag,
} from './styles';

const Header = ({ title }) => (
  <Container>
    <StatusBar />
    <History name="history" size={24} />
    <Title>{title}</Title>
    <BagContainer>
      <Bag name="shopping-bag" size={18} />
    </BagContainer>
  </Container>
);

export default Header;
