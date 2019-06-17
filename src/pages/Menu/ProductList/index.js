import React from 'react';

import {
  Container,
  ImageContent,
  Image,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  EstimativeTimeContent,
  EstimativeTime,
  IconTime,
} from './styles';

const ProductList = ({ data }) => (
  <Container>
    <ImageContent>
      <Image source={{ uri: data.file.url }} />
    </ImageContent>

    <ProductInfo>
      <ProductTitle numberOfLines={1}>{data.title}</ProductTitle>
      <ProductDescription>{data.description}</ProductDescription>
      <EstimativeTimeContent>
        <IconTime name="clock-o" />
        <EstimativeTime>
          {data.estimated_time}
          {' '}
mins
        </EstimativeTime>
      </EstimativeTimeContent>
    </ProductInfo>
  </Container>
);

export default ProductList;
