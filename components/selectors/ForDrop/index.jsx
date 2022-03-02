import {useNode} from "@craftjs/core";
import React, {useState} from "react";
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
const reScaleAnimation = keyframes`
 0% { background-size: 120%; }
 100% { background-size: 100%; }
`
const Wrapper = styled.div`
    position: absolute;
    top: 0;
    &>div {
      height: 100%;
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
   
    }
    .enter {
      animation: ${scaleAnimation} 0.5s forwards;
    }
    .leave {
      animation: ${reScaleAnimation} 0.5s forwards;
    }

`;

export const ForDrop = (props) => {
  const [enter, setEnter] = useState(false)
  const [leave, setLeave] = useState(false)
  props = {
    ...defaultProps,
    ...props,
  };
  console.log(enter)
  const {
    connectors: { connect },
  } = useNode();
  return (
    <Wrapper
      ref={connect}  {...props}
             className="w-full h-full"
    >
      <div
        onMouseEnter={() => {
          setEnter(true)
          setLeave(false)
        }}
        onMouseLeave={() => {
          setEnter(false)
          setLeave(true)
        }}
        className={
          enter
            ? 'enter'
            : leave
              ? 'leave'
              : ''
        }
      >

        {props.children}
      </div>
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