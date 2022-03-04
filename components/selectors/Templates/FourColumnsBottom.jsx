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

export const FourColumnsBottom = (props) => {

  props = {
    ...defaultProps,
    ...props,
  };
  return (
    <ContainerGrid
      padding={[props.paddingHeight, props.paddingWidth, props.paddingHeight, props.paddingWidth]}
      gap={props.gap}
      areasUp={"'l cl cr r'"}
      areasDown={"'l cl cr r'"}
      gridTemplateColumns='1fr 1fr 1fr 1fr'
    >
      <Element
        canvas id="imLesft"
        gridArea='l'
        height='auto'
        src='http://localhost:5000/ver.png'
        is={ImageBottom}
      />
      <Element
        canvas id="im2sin4"
        gridArea='cl'
        height='auto'
        src='http://localhost:5000/ver.png'
        is={ImageBottom}
      />
      <Element
        canvas id="imns4"
        gridArea='cr'
        height='auto'
        src='http://localhost:5000/ver.png'
        is={ImageBottom}
      />
      <Element
        canvas id="im24"
        gridArea='r'
        height='auto'
        src='http://localhost:5000/ver.png'
        is={ImageBottom}
      />
    </ContainerGrid>
  );
};

FourColumnsBottom.craft = {
  ...ContainerGrid.craft,
  displayName: '3 Col',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

