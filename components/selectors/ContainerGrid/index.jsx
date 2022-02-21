import React from 'react';
import {useNode} from "@craftjs/core";
import styled from "styled-components";

const defaultProps = {
  padding: ['0', '0', '0', '0'],
  margin: ['0', '0', '0', '0'],
  gap: '10',
  areasUp: "",
  areasDown: "",
};


const Grid = styled.div`
  display: grid;
  gap: ${({ gap }) =>
  `${gap}px`};
  margin: ${({ margin }) =>
  `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
  padding: ${({ padding }) =>
  `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`};
  width: 100%;  
  grid-template-areas: ${( props ) =>
    `${props.areasUp} ${props.areasDown}`};
`;

export const ContainerGrid = (props) => {
  props = {
    ...defaultProps,
    ...props,
  };

  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  const {children} = props;

  return (
    <Grid
      ref={connect}
      {...props}
    >
      {children}
    </Grid>
  );

};

ContainerGrid.craft = {
  displayName: 'ContainerGrid',
  props: defaultProps,
  rules: {
    canDrag: () => true,
  }
};
