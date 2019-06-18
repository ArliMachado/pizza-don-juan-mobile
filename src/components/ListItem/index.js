import React from 'react';

import { Container, Title, Image } from './styles';

const ListTypes = ({ title, uri }) => (
  <Container>
    <Image source={{ uri }} />
    <Title>{title}</Title>
  </Container>
);

export default ListTypes;
