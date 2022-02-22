import {useNode, Element} from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import {ForDropBottom} from "../ForDrop/ForDropBottom";
import {Text} from "../Text";

const TextDiv = styled.div`
  position: relative;
  grid-area:${({ gridArea }) =>
  `${gridArea}`};
  width: 100%;
  box-sizing: border-box;
`;

const defaultProps = {
  gridArea: '',
  height: 'auto',
};

export const TextForGrid = (props) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    //Props не разбирать
    <TextDiv ref={connect} {...props}>
        <Element canvas is={ForDropBottom} id="woww33">
          <Text fontSize='20' color={{ r: 0, g: 0, b: 0, a: 1 }}  text='Some Text'/>
        </Element>
    </TextDiv>
  );
};

TextForGrid.craft = {
  displayName: 'ContainerEl',
  props: defaultProps,
  rules: {
    canDrop: () => true,
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true
  },
};
