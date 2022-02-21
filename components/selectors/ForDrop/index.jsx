import {useNode} from "@craftjs/core";
import React from "react";
import styled from "styled-components";
import {ForDropSettings} from "./ForDropSettings";

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
`;

export const ForDrop = (props) => {
  props = {
    ...defaultProps,
    ...props,
  };
  console.log(props)
  const {
    connectors: { connect },
  } = useNode();
  return (
    <Wrapper ref={connect}
             className="w-full h-full"
             {...props}
    >
      {props.children}
    </Wrapper>
  );
};

ForDrop.craft = {
  displayName: 'Текст и Кнопки',
  props: defaultProps,
  related: {
    toolbar: ForDropSettings,
  },
  rules: {
    canMoveOut: () => {},
  },
};