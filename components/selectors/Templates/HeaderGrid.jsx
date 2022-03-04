import { Element } from '@craftjs/core';
import React from 'react';
import { ContainerGrid } from '../ContainerGrid';
import {ContainerGridSettings} from "../ContainerGrid/ContainerGridSettings";
import {ImageWidhtAnimatePrice} from "../Image/ImageWidhtAnimatePrice";
import {ImageHeader} from "../Image/ImageHeader";

const defaultProps = {
  paddingWidth: '0',
  paddingHeight: '1',
  gap: '2'
};

export const HeaderGrid = (props) => {

  props = {
    ...defaultProps,
    ...props,
  };
  return (
    <ContainerGrid
      padding={[props.paddingHeight, props.paddingWidth, props.paddingHeight, props.paddingWidth]}
      gap={props.gap}
      areasUp={"'l'"}
      areasDown={"'l'"}
    >
      <Element
        canvas id="l"
        gridArea='l'
        height='100%'
        src='http://localhost:5000/hor.png'
        is={ImageHeader}
      />
    </ContainerGrid>
  );
};

HeaderGrid.craft = {
  ...ContainerGrid.craft,
  displayName: 'Header',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

