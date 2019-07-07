import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import 'moment/locale/pt-br';

import {
  Container, OrderTitle, OrderDate, OrderValue,
} from './styles';

moment.locale('pt-BR');

const OrderList = ({ data }) => {
  const dataPedido = moment(data.created_at).fromNow();
  return (
    <Container>
      <OrderTitle>
Pedido #
        {data.id}
      </OrderTitle>
      <OrderDate>{dataPedido}</OrderDate>
      <OrderValue>
        R$
        {data.total_value}
      </OrderValue>
    </Container>
  );
};

OrderList.propTypes = {
  data: PropTypes.shape({
    created_at: PropTypes.string,
    id: PropTypes.number,
    total_value: PropTypes.string,
  }).isRequired,
};

export default OrderList;
