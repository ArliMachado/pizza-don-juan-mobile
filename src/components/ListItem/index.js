import React from 'react';

import { Container, Title, Image } from './styles';

const ListTypes = ({ title, uri }) => (
  <Container>
    <Title>{title}</Title>
    <Image source={{ uri }} />
  </Container>
);

export default ListTypes;
