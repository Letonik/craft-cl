import { Element, useNode } from '@craftjs/core';
import React from 'react';

import { Button } from '../Button';
import { Container } from '../Container';


export const ButtonBlack = () => {
  return (
    <Container >
      <Element canvas is={Button}
               id="ButtonBlack"
               buttonStyle="outline"
               color={{ r: 0, g: 0, b: 0, a: 1 }}
               colorHover={{ r: 179, g: 179, b: 179, a: 1 }}
               background={{ r: 0, g: 0, b: 0, a: 1 }}
               backgroundHover={{ r: 179, g: 179, b: 179, a: 1 }}
               textTransform='uppercase'
      />
    </Container>
  );
};

ButtonBlack.craft = {
  ...Container.craft,
  displayName: 'ButtonBlack',
};
