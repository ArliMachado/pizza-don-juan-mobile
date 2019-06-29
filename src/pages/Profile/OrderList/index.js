import React from 'react';

import {
  Container, OrderTitle, OrderDate, OrderValue,
} from './styles';

const OrderList = ({ data }) => {
  const totalOrder = data.products.length > 0
    ? data.products.map(product => Number(product.price)).reduce((prev, curr) => prev + curr)
    : 0;

  return (
    <Container>
      <OrderTitle>
Pedido #
        {data.id}
      </OrderTitle>
      <OrderDate>{data.created_at}</OrderDate>
      <OrderValue>
        R$
        {totalOrder}
      </OrderValue>
    </Container>
  );
};

export default OrderList;
