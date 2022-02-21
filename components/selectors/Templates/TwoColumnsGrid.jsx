import { Element, useNode } from '@craftjs/core';
import React from 'react';
import {Image} from '../Image';
import { ContainerGrid } from '../ContainerGrid';
import {ContainerGridSettings} from "../ContainerGrid/ContainerGridSettings";

const defaultProps = {
  paddingWidth: '40',
  paddingHeight: '40',
  gap: '10'
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
        src='https://i.pinimg.com/originals/aa/d8/ab/aad8abfb3729fa1982cf9e2731efe197.jpg'
        is={Image}
      />
      <Element
        canvas id="im2sin4"
        gridArea='r'
        height='100%'
        src='https://i.pinimg.com/originals/aa/d8/ab/aad8abfb3729fa1982cf9e2731efe197.jpg'
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

