import { UserComponent, useNode } from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';

const defaultProps = {
  color: { r: 92, g: 90, b: 90, a: 1 },
  margin: ['0', 'auto', '0', 'auto'],
  text: 'text'
};

const StyledText = styled.button`
  margin: ${({ margin }) =>
  `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
  color: ${(props) =>
  `rgba(${Object.values(props.color)})`};     
    
  }
`;

export const TextSlider = (props) => {

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
    <StyledText
      ref={connect}
      {...props}
    >
      {props.text}
    </StyledText>
  );
};

TextSlider.craft = {
  displayName: 'Button',
  props: defaultProps,
};
