import { Element, useNode } from '@craftjs/core';
import React from 'react';
import {Image} from '../Image';
import { ContainerGrid } from '../ContainerGrid';
import {ContainerGridSettings} from "../ContainerGrid/ContainerGridSettings";

const defaultProps = {
  paddingWidth: '0',
  paddingHeight: '1',
  gap: '2'
};

export const CustomGrid = (props) => {

  props = {
    ...defaultProps,
    ...props,
  };
  console.log(props)
  return (
    <ContainerGrid
      padding={[props.paddingHeight, props.paddingWidth, props.paddingHeight, props.paddingWidth]}
      gap={props.gap}
      areasUp={"'l l cu cu ru'"}
      areasDown={"'l l cd rd rd'"}
    >
      <Element
        canvas id="imfqqt"
        gridArea='l'
        height='100%'
        src='http://localhost:5000/ver.jpg'
        is={Image}
      />
      <Element
        canvas id="iixxn4"
        gridArea='cu'
        height='100%'
        src='http://localhost:5000/hor.jpeg'
        is={Image}
      />
      <Element
        canvas id="iasaqn4"
        gridArea='ru'
        height='100%'
        src='http://localhost:5000/ver.jpg'
        is={Image}
      />
      <Element
        canvas id="imtt4"
        gridArea='cd'
        height='100%'
        src='http://localhost:5000/ver.jpg'
        is={Image}
      />
      <Element
        canvas id="itdq4"
        gridArea='rd'
        height='100%'
        src='http://localhost:5000/hor.jpeg'
        is={Image}
      />
    </ContainerGrid>
  );
};

CustomGrid.craft = {
  ...ContainerGrid.craft,
  displayName: 'Custom',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

