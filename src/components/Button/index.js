import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text, GoIcon } from './styles';

const Button = ({ text }) => (
  <Container>
    <Text>{text}</Text>
    <GoIcon name="angle-right" size={24} />
  </Container>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
