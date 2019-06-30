import React from 'react';

import {
  Container, OrderTitle, OrderDate, OrderValue,
} from './styles';

const OrderList = ({ data }) => (
  <Container>
    <OrderTitle>
Pedido #
      {data.id}
    </OrderTitle>
    <OrderDate>{data.created_at}</OrderDate>
    <OrderValue>
        R$
      {data.total_value}
    </OrderValue>
  </Container>
);

export default OrderList;
