import { Element } from '@craftjs/core';
import React from 'react';
import { ContainerGrid } from '../ContainerGrid';
import {ContainerGridSettings} from "../ContainerGrid/ContainerGridSettings";
import {ImageWidhtAnimatePrice} from "../Image/ImageWidhtAnimatePrice";

const defaultProps = {
  paddingWidth: '0',
  paddingHeight: '1',
  gap: '2'
};

export const ColumnsGrid1x1x1x1 = (props) => {

  props = {
    ...defaultProps,
    ...props,
  };
  console.log(props)
  return (
    <ContainerGrid
      padding={[props.paddingHeight, props.paddingWidth, props.paddingHeight, props.paddingWidth]}
      gap={props.gap}
      areasUp={"'l cl cr r'"}
      areasDown={"'l cl cr r'"}
    >
      <Element
        canvas id="l"
        gridArea='l'
        height='100%'
        src='http://localhost:5000/ver.png'
        is={ImageWidhtAnimatePrice}
      />
      <Element
        canvas id="cl"
        gridArea='cl'
        height='100%'
        src='http://localhost:5000/ver.png'
        is={ImageWidhtAnimatePrice}
      />
      <Element
        canvas id="cr"
        gridArea='cr'
        height='100%'
        src='http://localhost:5000/ver.png'
        is={ImageWidhtAnimatePrice}
      />
      <Element
        canvas id="r"
        gridArea='r'
        height='100%'
        src='http://localhost:5000/ver.png'
        is={ImageWidhtAnimatePrice}
      />
    </ContainerGrid>
  );
};

ColumnsGrid1x1x1x1.craft = {
  ...ContainerGrid.craft,
  displayName: '2 Col',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

