import {useNode} from "@craftjs/core";
import React from "react";
import styled, {keyframes} from "styled-components";
import {ForDropSettings} from "./ForDropSettings";

const defaultProps = {
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  src: 'http://localhost:5000/ver.jpg',
};
const scaleAnimation = keyframes`
 0% { background-size: 100%; }
 100% { background-size: 120%; }
`
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) =>
  `${justifyContent}`};
  align-items: ${({ alignItems }) =>
  `${alignItems}`};
  background-image: ${({ src }) =>
  `url(${src})`};
  background-size: cover;
  background-position: center;
  transition: background-size .3s ease-in;
  &:hover {
     animation: ${scaleAnimation} 0.5s forwards;
  }

`;

export const ForDrop = (props) => {
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