import { Element, useNode } from '@craftjs/core';
import React from 'react';
import {Image} from '../Image';
import { ContainerGrid } from '../ContainerGrid';
import {ContainerGridSettings} from "../ContainerGrid/ContainerGridSettings";

const defaultProps = {
  paddingWidth: '40',
  paddingHeight: '40',
  gap: '10'
};

export const FourColumnsGrid = (props) => {

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
        canvas id="imLefqqt"
        gridArea='l'
        height='100%'
        src='https://bipbap.ru/wp-content/uploads/2017/06/fXIUQV.jpg'
        is={Image}
      />
      <Element
        canvas id="im1qin4"
        gridArea='cl'
        height='100%'
        src='https://bipbap.ru/wp-content/uploads/2017/06/fXIUQV.jpg'
        is={Image}
      />
      <Element
        canvas id="im2iqn4"
        gridArea='cr'
        height='100%'
        src='https://bipbap.ru/wp-content/uploads/2017/06/fXIUQV.jpg'
        is={Image}
      />
      <Element
        canvas id="im2inq4"
        gridArea='r'
        height='100%'
        src='https://bipbap.ru/wp-content/uploads/2017/06/fXIUQV.jpg'
        is={Image}
      />
    </ContainerGrid>
  );
};

FourColumnsGrid.craft = {
  ...ContainerGrid.craft,
  displayName: '4 Col',
  props: defaultProps,
  related: {
    toolbar: ContainerGridSettings,
  },
};

