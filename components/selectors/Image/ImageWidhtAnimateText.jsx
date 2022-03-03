import {useNode, useEditor, Element} from '@craftjs/core';
import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import { ImageSettings } from './ImageSetting';
import {Text} from "../Text";

const textAnimation = keyframes`
 0% { opacity: 0; bottom: 4%;}
 100% { opacity: 1; bottom: 7%;}
`
const reTextAnimation = keyframes`
 0% { opacity: 1; bottom: 7%;}
 100% { opacity: 0; bottom: 4%;}
`


const ImageDiv = styled.div`
  position: relative;
  grid-area:${({ gridArea }) =>
  `${gridArea}`};
  width: 100%;
  overflow: hidden;
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
  img {
    width: 100%;
    transition: 0.5s;
    height: ${({ height }) =>
  `${height}`};
    &:hover {
     transform: scale(1.2);
    }  
  }
`;

const defaultProps = {
  gridArea: '',
  src: 'http://localhost:5000/ver.jpg',
  link: '',
  height: 'auto'
};

export const ImageWidhtAnimateText = (props) => {
  const [enter, setEnter] = useState(false)
  const [leave, setLeave] = useState(false)
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { src, link } = props;

  const clickLink = (e) => {
    if (!link) {
      e.preventDefault()
    }
  }

  return (
    //Props не разбирать
    <ImageDiv ref={connect} {...props}>
      <a href={link} onClick={clickLink}>
        <img
          onMouseEnter={() => {
            setEnter(true)
            setLeave(false)
          }}
          onMouseLeave={() => {
            setEnter(false)
            setLeave(true)
          }}
          src={src}
        />
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
      </a>
    </ImageDiv>
  );
};

ImageWidhtAnimateText.craft = {
  displayName: 'Image',
  props: defaultProps,
  related: {
    toolbar: ImageSettings,
  },
  rules: {
    canDrop: () => true,
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true
  },
};
