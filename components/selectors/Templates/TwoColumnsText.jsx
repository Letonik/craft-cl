import { Element, useNode } from '@craftjs/core';
import React from 'react';
import { ContainerGrid } from '../ContainerGrid';
import {ContainerGridSettings} from "../ContainerGrid/ContainerGridSettings";
import {TextForGrid} from "../TextForGrid";

const defaultProps = {
  paddingWidth: '40',
  paddingHeight: '40',
  gap: '10'
};

export const TwoColumnsText = (props) => {

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
        is={TextForGrid}
      />
      <Element
        canvas id="im2sin4"
        gridArea='r'
        is={TextForGrid}
      />
    </ContainerGrid>
  );
};

TwoColumnsText.craft = {
  ...ContainerGrid.craft,
  displayName: '2 Col',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

