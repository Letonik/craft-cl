import {Element, useNode} from "@craftjs/core";
import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
import {ForDropSettings} from "./ForDropSettings";
import {Text} from "../Text";
import {ForDrop} from "./index";

const defaultProps = {
  flexDirection: 'column',
  justifyContent: 'end',
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
const textAnimation = keyframes`
 0% { opacity: 0; bottom: 4%;}
 100% { opacity: 1; bottom: 7%;}
`
const reTextAnimation = keyframes`
 0% { opacity: 1; bottom: 7%;}
 100% { opacity: 0; bottom: 4%;}
`
const Wrapper = styled.div`
    position: absolute;
    top: 0;
    &>div {
      height: 100%;
      background-image: ${({ src }) =>
  `url(${src})`};
      background-size: cover;
      background-position: center;
   
      .head {
        position: absolute;
        bottom: 14%;
        left: 11%
      }
      .down {
        position: absolute;
        bottom: 4%;
        left: 11%
      }
      .downHide {
        display: none;
      }
      .downEnter {
        animation: ${textAnimation} 0.5s forwards;
      }
      .downLeave {
       animation: ${reTextAnimation} 0.5s forwards;
      }
    }
    .enter {
      animation: ${scaleAnimation} 0.5s forwards;
    }
    .leave {
      animation: ${reScaleAnimation} 0.5s forwards;
    }

`;

export const ForDropWidthAnimateText = (props) => {
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
        <div className='head'>
          <Element
            canvas is={Text}
            id="wdow33"
            text='Какой-то текст'
            color={{ r: 255, g: 255, b: 255, a: 1 }}
            fontSize={25}
            fontFamily='Bodoni'
          />
        </div>
        <div className={`down ${enter 
          ? 'downEnter'
          : leave 
            ? 'downLeave'
            : 'downHide'
        }`}
        >
          <Element
            canvas is={Text}
            id="w33"
            text='Узнать больше'
            color={{ r: 255, g: 255, b: 255, a: 1 }}
            fontSize={13}
            fontFamily='Bodoni'
          />
        </div>
      </div>
    </Wrapper>
  );
};

ForDropWidthAnimateText.craft = {
  displayName: 'Текст и Кнопки',
  props: defaultProps,
  related: {
    toolbar: ForDropSettings,
  },
  rules: {
    canMoveOut: () => {},
  },
};