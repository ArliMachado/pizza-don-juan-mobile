import React from 'react';

import {
  Content, Title, History, BagContainer, Bag,
} from './styles';

const MenuHeader = ({ title }) => (
  <Content>
    <History name="history" size={24} />
    <Title>{title}</Title>
    <BagContainer>
      <Bag name="shopping-bag" size={18} />
    </BagContainer>
  </Content>
);

export default MenuHeader;
