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

export const OneAndFourGrid = (props) => {

  props = {
    ...defaultProps,
    ...props,
  };
  console.log(props)
  return (
    <ContainerGrid
      padding={[props.paddingHeight, props.paddingWidth, props.paddingHeight, props.paddingWidth]}
      gap={props.gap}
      areasUp={"'l l lu ru'"}
      areasDown={"'l l ld rd'"}
      link=''
    >
        <Element
          canvas id="imLeft"
          gridArea='l'
          height='100%'
          src='http://localhost:5000/ver.png'
          is={Image}
        />
        <Element
          canvas id="im1in4"
          gridArea='lu'
          height='100%'
          src='http://localhost:5000/ver.png'
          is={Image}
        />
        <Element
          canvas id="im2in4"
          gridArea='ru'
          height='100%'
          src='http://localhost:5000/ver.png'
          is={Image}
        />
        <Element
          canvas id="im3in4"
          is={Image}
          height='100%'
          gridArea='ld'
          src='http://localhost:5000/ver.png'
        />
        <Element
          canvas id="im4in4"
          gridArea='rd'
          height='100%'
          src='http://localhost:5000/ver.png'
          is={Image}
        />
    </ContainerGrid>
  );
};

OneAndFourGrid.craft = {
  ...ContainerGrid.craft,
  displayName: '1 - 4',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

