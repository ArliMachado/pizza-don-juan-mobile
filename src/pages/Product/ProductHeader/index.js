import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity } from 'react-native';
import {
  Content, Title, History, BagContainer, Bag,
} from './styles';
import { navigate } from '~/services/navigation';

const MenuHeader = ({ title }) => (
  <Content>
    <History name="history" size={24} />
    <Title>{title}</Title>
    <TouchableOpacity onPress={() => navigate('ShoppingCart')}>
      <BagContainer>
        <Bag name="shopping-bag" size={18} />
      </BagContainer>
    </TouchableOpacity>
  </Content>
);

MenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MenuHeader;
