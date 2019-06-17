import React from 'react';

import {
  Content, Title, StatusBar, History, BagContainer, Bag,
} from './styles';

const MenuHeader = ({ title }) => (
  <Content>
    <StatusBar />
    <History name="history" size={24} />
    <Title>{title}</Title>
    <BagContainer>
      <Bag name="shopping-bag" size={18} />
    </BagContainer>
  </Content>
);

export default MenuHeader;
