import React from 'react';

import {
  Container,
  ImageContent,
  Image,
  ProductInfo,
  ProductTitle,
  ProductDescription,
} from './styles';

const ListTypes = ({ data }) => (
  <Container>
    <ImageContent>
      <Image source={{ uri: data.file.url }} />
    </ImageContent>

    <ProductInfo>
      <ProductTitle numberOfLines={1}>{data.title}</ProductTitle>
      <ProductDescription>{data.description}</ProductDescription>
    </ProductInfo>
  </Container>
);

export default ListTypes;
