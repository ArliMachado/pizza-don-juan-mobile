import React from 'react';
import PropType from 'prop-types';

import {
  Container,
  ImageContent,
  Image,
  ProductInfo,
  ProductTitle,
  ProductSize,
  ProductPrice,
  ButtonContent,
  Delete,
} from './styles';

const CartList = ({ data, remove }) => (
  <Container>
    <ImageContent>
      <Image source={{ uri: data.image }} />
    </ImageContent>
    <ProductInfo>
      <ProductTitle numberOfLines={1}>{data.title}</ProductTitle>
      <ProductSize>
        Tamanho:
        {data.size}
      </ProductSize>
      <ProductPrice>
        R$
        {data.price}
      </ProductPrice>
    </ProductInfo>

    <ButtonContent>
      <Delete name="trash-o" size={24} onPress={remove} />
    </ButtonContent>
  </Container>
);

CartList.propTypes = {
  data: PropType.shape({
    url: PropType.string,
    title: PropType.string,
  }).isRequired,
  remove: PropType.func.isRequired,
};

export default CartList;
