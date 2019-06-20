import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Image } from './styles';

const ListTypes = ({ title, uri }) => (
  <Container>
    <Image source={{ uri }} />
    <Title>{title}</Title>
  </Container>
);

ListTypes.propTypes = {
  title: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};

export default ListTypes;
