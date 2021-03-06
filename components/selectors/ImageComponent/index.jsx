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

export const OneImage = (props) => {

  props = {
    ...defaultProps,
    ...props,
  };
  console.log(props)
  return (
    <ContainerGrid
      padding={[props.paddingHeight, props.paddingWidth, props.paddingHeight, props.paddingWidth]}
      gap={props.gap}
      areasUp={"'l'"}
      areasDown={"'l'"}
    >
      <Element
        canvas id="imLesft"
        gridArea='l'
        height='100%'
        src='https://i.pinimg.com/originals/aa/d8/ab/aad8abfb3729fa1982cf9e2731efe197.jpg'
        is={Image}
      />
    </ContainerGrid>
  );
};

OneImage.craft = {
  ...ContainerGrid.craft,
  displayName: 'Image',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

