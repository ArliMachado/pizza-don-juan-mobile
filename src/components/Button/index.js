import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text, GoIcon } from './styles';

const Button = ({ text, onpress }) => (
  <Container onPress={onpress}>
    <Text>{text}</Text>
    <GoIcon name="angle-right" size={24} />
  </Container>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onpress: PropTypes.func.isRequired,
};

export default Button;
