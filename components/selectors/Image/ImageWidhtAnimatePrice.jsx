import {useNode, useEditor, Element} from '@craftjs/core';
import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import { ImageSettings } from './ImageSetting';
import {Text} from "../Text";


const ImageDiv = styled.div`
  position: relative;
  grid-area:${({ gridArea }) =>
  `${gridArea}`};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .head {
     position: absolute;
     bottom: 14%;
     width: 100%;
  }
  .down {
     position: absolute;
     bottom: 7%;
     width: 100%;
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

export const ImageWidhtAnimatePrice = (props) => {
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
            textAlign='center'
          />
        </div>
        <div className={`down`}
        >
          <Element
            canvas is={Text}
            id="w33"
            text='5 000 $'
            color={{ r: 255, g: 255, b: 255, a: 1 }}
            fontSize={15}
            fontFamily='Bodoni'
            textAlign='center'
          />
        </div>
      </a>
    </ImageDiv>
  );
};

ImageWidhtAnimatePrice.craft = {
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
