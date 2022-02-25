import React from 'react';
import {useNode} from "@craftjs/core";
import styled from "styled-components";

const defaultProps = {
  padding: ['0', '0', '0', '0'],
  margin: ['0', '0', '0', '0'],
  gap: '10',
  areasUp: "",
  areasDown: "",
  gridTemplateColumns: 'none'
};


const Grid = styled.div`
  display: grid;
  gap: ${({ gap }) =>
  `${gap}px`};
  margin: ${({ margin }) =>
  `${margin[0]}% ${margin[1]}% ${margin[2]}% ${margin[3]}%`};
  padding: ${({ padding }) =>
  `${padding[0]}% ${padding[1]}% ${padding[2]}% ${padding[3]}%`};
  width: 100%;  
  grid-template-areas: ${( props ) =>
    `${props.areasUp} ${props.areasDown}`};
  grid-template-columns: ${({gridTemplateColumns}) =>
  gridTemplateColumns !== 'none'
    ? `${gridTemplateColumns};`
    : 'none'};  
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
 /*     style={{
        gridTemplateColumns: props.gridTemplateColumns ? props.gridTemplateColumns : 'none'
      }}*/
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
