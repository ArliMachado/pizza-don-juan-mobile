import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import {
  Content, ContentTitle, Title, StatusBar, BackToPage, TotalPrice,
} from './styles';

const Header = ({ title, navigateTo, totalValue }) => (
  <Content>
    <StatusBar />
    <TouchableOpacity onPress={navigateTo}>
      <ContentTitle>
        <BackToPage name="angle-left" size={24} />
        <Title>{title}</Title>
      </ContentTitle>
    </TouchableOpacity>
    <TotalPrice>{totalValue}</TotalPrice>
  </Content>
);

Header.defaultProps = {
  totalValue: null,
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired,
  totalValue: PropTypes.string,
};

export default Header;
