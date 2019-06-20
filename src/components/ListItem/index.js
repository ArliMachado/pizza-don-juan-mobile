import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Image } from './styles';

const ListItem = ({ title, uri }) => (
  <Container>
    <Image source={{ uri }} />
    <Title>{title}</Title>
  </Container>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};

export default ListItem;
