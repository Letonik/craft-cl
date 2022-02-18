import { Element, useNode } from '@craftjs/core';
import React from 'react';

import { Button } from '../Button';
import { Container } from '../Container';


export const ButtonWhite = () => {
  return (
      <Element canvas is={Button}
               id="ButtonWhite"
               buttonStyle="outline"
               color={{ r: 255, g: 255, b: 255, a: 1 }}
               colorHover={{ r: 179, g: 179, b: 179, a: 1 }}
               background={{ r: 255, g: 255, b: 255, a: 1 }}
               backgroundHover={{ r: 179, g: 179, b: 179, a: 1 }}
               textTransform='uppercase'
      />
  );
};

ButtonWhite.craft = {
  ...Container.craft,
  displayName: 'ButtonWhite',
};
