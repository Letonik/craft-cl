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

export const ThreeColumnsGrid = (props) => {

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
        canvas id="imL2eft"
        gridArea='l'
        height='100%'
        src='https://i11.fotocdn.net/s120/b3d8231f34e73a59/gallery_xl/2750306009.jpg'
        is={Image}
      />
      <Element
        canvas id="im13in4"
        gridArea='c'
        height='100%'
        src='https://i11.fotocdn.net/s120/b3d8231f34e73a59/gallery_xl/2750306009.jpg'
        is={Image}
      />
      <Element
        canvas id="im23in4"
        gridArea='r'
        height='100%'
        src='https://i11.fotocdn.net/s120/b3d8231f34e73a59/gallery_xl/2750306009.jpg'
        is={Image}
      />
    </ContainerGrid>
  );
};

ThreeColumnsGrid.craft = {
  ...ContainerGrid.craft,
  displayName: '3 Col',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

