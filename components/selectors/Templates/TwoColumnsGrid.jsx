import { Element, useNode } from '@craftjs/core';
import React from 'react';
import {Image} from '../Image';
import { ContainerGrid } from '../ContainerGrid';
import {ContainerGridSettings} from "../ContainerGrid/ContainerGridSettings";

const defaultProps = {
  paddingWidth: '0',
  paddingHeight: '1',
  gap: '2'
};

export const TwoColumnsGrid = (props) => {

  props = {
    ...defaultProps,
    ...props,
  };
  console.log(props)
  return (
    <ContainerGrid
      padding={[props.paddingHeight, props.paddingWidth, props.paddingHeight, props.paddingWidth]}
      gap={props.gap}
      areasUp={"'l r'"}
      areasDown={"'l r'"}
    >
      <Element
        canvas id="imLesft"
        gridArea='l'
        height='100%'
        src='http://localhost:5000/ver.png'
        is={Image}
      />
      <Element
        canvas id="im2sin4"
        gridArea='r'
        height='100%'
        src='http://localhost:5000/ver.png'
        is={Image}
      />
    </ContainerGrid>
  );
};

TwoColumnsGrid.craft = {
  ...ContainerGrid.craft,
  displayName: '2 Col',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

