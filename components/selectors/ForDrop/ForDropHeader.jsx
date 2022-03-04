import {Element, useNode} from "@craftjs/core";
import React from "react";
import styled from "styled-components";
import {ForDropSettings} from "./ForDropSettings";
import {Text} from "../Text";
import {Button} from "../Button";

const defaultProps = {
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center'
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) =>
  `${justifyContent}`};
  align-items: ${({ alignItems }) =>
  `${alignItems}`};
  .btn {
     position: absolute;
     bottom: 14%;
     width: 100%;
     display: flex;
     flex-direction: column;
  }
`;

export const ForDropHeader = (props) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    connectors: { connect },
  } = useNode();
  return (
    <Wrapper ref={connect}
             className="w-full h-full"
             {...props}
    >
      <Element
        canvas is={Text}
        id="w3h3"
        text='ЗАГОЛОВОК'
        color={{ r: 0, g: 0, b: 0, a: 1 }}
        fontSize={35}
        fontFamily='Bodoni'
        textAlign='center'
      />
      <div className='btn'>
        <Element
          canvas is={Button}
          id="w33g"
          buttonStyle="outline"
          color={{ r: 0, g: 0, b: 0, a: 1 }}
          colorHover={{ r: 179, g: 179, b: 179, a: 1 }}
          background={{ r: 0, g: 0, b: 0, a: 1 }}
          backgroundHover={{ r: 179, g: 179, b: 179, a: 1 }}
          textTransform='uppercase'
          alignSelf='center'
        />
      </div>
      {props.children}
    </Wrapper>
  );
};

ForDropHeader.craft = {
  displayName: 'Текст и Кнопки',
  props: defaultProps,
  related: {
    toolbar: ForDropSettings,
  },
  rules: {
    canMoveOut: () => {},
  },
};