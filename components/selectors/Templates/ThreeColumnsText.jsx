import { Element, useNode } from '@craftjs/core';
import React from 'react';
import { ContainerGrid } from '../ContainerGrid';
import {ContainerGridSettings} from "../ContainerGrid/ContainerGridSettings";
import {TextForGrid} from "../TextForGrid";

const defaultProps = {
  paddingWidth: '3',
  paddingHeight: '3',
  gap: '10'
};

export const ThreeColumnsText = (props) => {

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
        is={TextForGrid}
      />
      <Element
        canvas id="im2sin4"
        gridArea='c'
        is={TextForGrid}
      />
      <Element
        canvas id="imn4"
        gridArea='r'
        is={TextForGrid}
      />
    </ContainerGrid>
  );
};

ThreeColumnsText.craft = {
  ...ContainerGrid.craft,
  displayName: '3 Col',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

