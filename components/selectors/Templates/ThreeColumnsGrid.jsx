import { Element, useNode } from '@craftjs/core';
import React from 'react';
import {Image} from '../Image';
import { ContainerGrid } from '../ContainerGrid';
import {ContainerGridSettings} from "../ContainerGrid/ContainerGridSettings";

const defaultProps = {
  paddingWidth: '3',
  paddingHeight: '3',
  gap: '10'
};

export const ThreeColumnsGrid = (props) => {

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
    >
      <Element
        canvas id="imL2eft"
        gridArea='l'
        height='100%'
        src='http://localhost:5000/ver.jpg'
        is={Image}
      />
      <Element
        canvas id="im13in4"
        gridArea='c'
        height='100%'
        src='http://localhost:5000/ver.jpg'
        is={Image}
      />
      <Element
        canvas id="im23in4"
        gridArea='r'
        height='100%'
        src='http://localhost:5000/ver.jpg'
        is={Image}
      />
    </ContainerGrid>
  );
};

ThreeColumnsGrid.craft = {
  ...ContainerGrid.craft,
  displayName: '3 Col',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

