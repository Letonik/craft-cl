import { UserComponent, useNode } from '@craftjs/core';
import cx from 'classnames';
import React from 'react';
import styled from 'styled-components';

import { ButtonSettings } from './ButtonSettings';

import { Text } from '../Text/index';

const defaultProps = {
  backgroundHover:  { r: 155, g: 55, b: 105, a: 0.5 },
  background: { r: 255, g: 255, b: 255, a: 0.5 },
  color: { r: 92, g: 90, b: 90, a: 1 },
  colorHover: { r: 155, g: 55, b: 105, a: 1 },
  buttonStyle: 'outline',
  text: 'Button',
  margin: ['0', 'auto', '0', 'auto'],
  textComponent: {
    ...Text.craft.props,
    textAlign: 'center',
  },
};

const StyledButton = styled.button`
  background: ${(props) =>
  props.buttonStyle === 'full'
    ? `rgba(${Object.values(props.background)})`
    : 'transparent'};
  border: 1px solid transparent;
  border-color: ${(props) =>
  props.buttonStyle === 'outline'
    ? `rgba(${Object.values(props.background)})`
    : 'transparent'};
   margin: ${({ margin }) =>
  `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
  width: auto;  
  display: block;
  padding: 7px 15px;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
  props.buttonStyle === 'full'
    ? `rgba(${Object.values(props.backgroundHover)})`
    : 'transparent'};
     border-color: ${(props) =>
  props.buttonStyle === 'outline'
    ? `rgba(${Object.values(props.backgroundHover)})`
    : 'transparent'};  
     color: ${(props) =>
  `rgba(${Object.values(props.colorHover)})`} !important;     
     h2 {
        color: ${(props) =>
  `rgba(${Object.values(props.colorHover)})`} !important; 
     } 
  }
`;

export const Button = (props) => {

  props = {
    ...defaultProps,
    ...props,
  };
  console.log(props)
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { text, textComponent, color, ...otherProps } = props;
  return (
    <StyledButton
      ref={connect}
      className={cx([
        'w-full',
        {
          'shadow-lg': props.buttonStyle === 'full',
        },
      ])}
      {...otherProps}
    >
      <Text {...textComponent} text={text} color={props.color} colorHover={props.colorHover} textTransform={props.textTransform}/>
    </StyledButton>
  );
};

Button.craft = {
  displayName: 'Button',
  props: defaultProps,
  related: {
    toolbar: ButtonSettings,
  },
};
