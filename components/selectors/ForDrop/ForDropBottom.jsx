import {Element, useNode} from "@craftjs/core";
import React from "react";
import styled from "styled-components";
import {ForDropSettings} from "./ForDropSettings";
import {Text} from "../Text";

const defaultProps = {
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center'
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) =>
  `${justifyContent}`};
  align-items: ${({ alignItems }) =>
  `${alignItems}`};
  min-height: 30px;
`;

export const ForDropBottom = (props) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    connectors: { connect },
  } = useNode();
  return (
    <Wrapper ref={connect}
             className="w-full"
             {...props}
    >
      {props.children}
    </Wrapper>
  );
};

ForDropBottom.craft = {
  displayName: 'Текст и Кнопки',
  props: defaultProps,
  related: {
    toolbar: ForDropSettings,
  },
  rules: {
    canMoveOut: () => {},
  },
};