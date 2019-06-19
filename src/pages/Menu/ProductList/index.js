import React from 'react';
import PropTypes from 'prop-types';

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

ProductList.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
    title: PropTypes.string,
    description: PropTypes.string,
    estimated_time: PropTypes.number,
  }).isRequired,
};

export default ProductList;
