import { Element, useNode } from '@craftjs/core';
import React from 'react';
import {Image} from '../Image';
import { ContainerGrid } from '../ContainerGrid';
import {ContainerGridSettings} from "../ContainerGrid/ContainerGridSettings";
import {SwiperCom} from "./index";
import {Button} from "../Button";

const defaultProps = {
  paddingWidth: '3',
  paddingHeight: '3',
  gap: '10'
};

export const OneSwiper = (props) => {

  props = {
    ...defaultProps,
    ...props,
  };
  console.log(props)
  return (
    <ContainerGrid
      padding={[props.paddingHeight, props.paddingWidth, props.paddingHeight, props.paddingWidth]}
      gap={props.gap}
      areasUp={"'l'"}
      areasDown={"'l'"}
    >
      <Element
        canvas id="imLesft"
        gridArea='l'
        height='100%'
        src='http://localhost:5000/hor.png'
        is={SwiperCom}
      />
    </ContainerGrid>
  );
};

OneSwiper.craft = {
  ...ContainerGrid.craft,
  displayName: 'SwipeContainer',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

