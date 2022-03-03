import { Element, useNode } from '@craftjs/core';
import React from 'react';
import { ContainerGrid } from '../ContainerGrid';
import {ContainerGridSettings} from "../ContainerGrid/ContainerGridSettings";
import {ImageBottom} from "../Image/ImageBottom";

const defaultProps = {
  paddingWidth: '3',
  paddingHeight: '3',
  gap: '10'
};

export const ThreeColumnsBottom = (props) => {

  props = {
    ...defaultProps,
    ...props,
  };
  console.log(props)
  return (
    <ContainerGrid
      padding={[props.paddingHeight, props.paddingWidth, props.paddingHeight, props.paddingWidth]}
      gap={props.gap}
      areasUp={"'l c r'"}
      areasDown={"'l c r'"}
      gridTemplateColumns='1fr 1fr 1fr'
    >
      <Element
        canvas id="imLesft"
        gridArea='l'
        height='auto'
        src='http://localhost:5000/ver.jpg'
        is={ImageBottom}
      />
      <Element
        canvas id="im2sin4"
        gridArea='c'
        height='auto'
        src='http://localhost:5000/ver.jpg'
        is={ImageBottom}
      />
      <Element
        canvas id="im2sins4"
        gridArea='r'
        height='auto'
        src='http://localhost:5000/ver.jpg'
        is={ImageBottom}
      />
    </ContainerGrid>
  );
};

ThreeColumnsBottom.craft = {
  ...ContainerGrid.craft,
  displayName: '2 Col',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

