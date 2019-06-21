import React from 'react';
import PropTypes from 'prop-types';

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

MenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MenuHeader;
