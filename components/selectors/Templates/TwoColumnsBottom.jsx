import { Element, useNode } from '@craftjs/core';
import React from 'react';
import { ContainerGrid } from '../ContainerGrid';
import {ContainerGridSettings} from "../ContainerGrid/ContainerGridSettings";
import {ImageBottom} from "../ImageBottom";

const defaultProps = {
  paddingWidth: '40',
  paddingHeight: '40',
  gap: '10'
};

export const TwoColumnsBottom = (props) => {

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
      gridTemplateColumns='1fr 1fr'
    >
      <Element
        canvas id="imLesft"
        gridArea='l'
        height='auto'
        src='https://i.pinimg.com/originals/aa/d8/ab/aad8abfb3729fa1982cf9e2731efe197.jpg'
        is={ImageBottom}
      />
      <Element
        canvas id="im2sin4"
        gridArea='r'
        height='auto'
        src='https://i.pinimg.com/originals/aa/d8/ab/aad8abfb3729fa1982cf9e2731efe197.jpg'
        is={ImageBottom}
      />
    </ContainerGrid>
  );
};

TwoColumnsBottom.craft = {
  ...ContainerGrid.craft,
  displayName: '2 Col',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

