import React from 'react';
import PropTypes from 'prop-types';
// import { Image } from 'react-native';

import {
  Container, InfoContent, Image, Title, Price,
} from './styles';

const ListItem = ({ title, uri, price }) => (
  <Container>
    <Image source={{ uri }} resizeMode="contain" />
    <InfoContent>
      <Title>{title}</Title>
      {price ? (
        <Price>
          R$
          {price}
        </Price>
      ) : null}
    </InfoContent>
  </Container>
);

ListItem.defaultProps = {
  price: null,
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  price: PropTypes.string,
};

export default ListItem;
