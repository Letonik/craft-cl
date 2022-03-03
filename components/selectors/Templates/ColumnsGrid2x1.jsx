import { Element } from '@craftjs/core';
import React from 'react';
import { ContainerGrid } from '../ContainerGrid';
import {ContainerGridSettings} from "../ContainerGrid/ContainerGridSettings";
import {ImageWidhtAnimateText} from "../Image/ImageWidhtAnimateText";
import {ImageWidhtAnimate} from "../Image/ImageWidhtAnimate";

const defaultProps = {
  paddingWidth: '0',
  paddingHeight: '1',
  gap: '2'
};

export const ColumnsGrid2x1 = (props) => {

  props = {
    ...defaultProps,
    ...props,
  };
  console.log(props)
  return (
    <ContainerGrid
      padding={[props.paddingHeight, props.paddingWidth, props.paddingHeight, props.paddingWidth]}
      gap={props.gap}
      areasUp={"'l r r'"}
      areasDown={"'l r r'"}
    >
      <Element
        canvas id="imLesft"
        gridArea='l'
        height='100%'
        src='http://localhost:5000/ver.jpg'
        is={ImageWidhtAnimateText}
      />
      <Element
        canvas id="im2sin4"
        gridArea='r'
        height='100%'
        src='http://localhost:5000/hor.jpeg'
        is={ImageWidhtAnimate}
      />
    </ContainerGrid>
  );
};

ColumnsGrid2x1.craft = {
  ...ContainerGrid.craft,
  displayName: '2 Col',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

