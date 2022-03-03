import { Element, useNode } from '@craftjs/core';
import React from 'react';
import {Image} from '../Image';
import { ContainerGrid } from '../ContainerGrid';
import {ContainerGridSettings} from "../ContainerGrid/ContainerGridSettings";
import {ImageWidhtAnimateText} from "../Image/ImageWidhtAnimateText";

const defaultProps = {
  paddingWidth: '0',
  paddingHeight: '1',
  gap: '2'
};

export const ColumnsGrid1x1x1 = (props) => {

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
        canvas id="aaa"
        gridArea='l'
        height='100%'
        src='http://localhost:5000/ver.jpg'
        is={ImageWidhtAnimateText}
      />
      <Element
        canvas id="sss"
        gridArea='c'
        height='100%'
        src='http://localhost:5000/ver.jpg'
        is={ImageWidhtAnimateText}
      />
      <Element
        canvas id="ddd"
        gridArea='r'
        height='100%'
        src='http://localhost:5000/ver.jpg'
        is={ImageWidhtAnimateText}
      />
    </ContainerGrid>
  );
};

ColumnsGrid1x1x1.craft = {
  ...ContainerGrid.craft,
  displayName: '2 Col',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

