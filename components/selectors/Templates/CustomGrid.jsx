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
        src='https://mobimg.b-cdn.net/v3/fetch/13/13fcae729f327cc0ba8e82dfda2291ea.jpeg'
        is={Image}
      />
      <Element
        canvas id="iixxn4"
        gridArea='cu'
        height='100%'
        src='https://i.ytimg.com/vi/N9Mto9QqCIo/maxresdefault.jpg'
        is={Image}
      />
      <Element
        canvas id="iasaqn4"
        gridArea='ru'
        height='100%'
        src='https://im0-tub-ru.yandex.net/i?id=be6b409379d591cd1eb9229f683937ef-l&ref=rim&n=13&w=1080&h=1350'
        is={Image}
      />
      <Element
        canvas id="imtt4"
        gridArea='cd'
        height='100%'
        src='https://i09.fotocdn.net/s127/7752cd4796501f4e/public_pin_l/2881098688.jpg'
        is={Image}
      />
      <Element
        canvas id="itdq4"
        gridArea='rd'
        height='100%'
        src='https://pbs.twimg.com/media/DF0kq6fWAAIh2tF.jpg:large'
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

