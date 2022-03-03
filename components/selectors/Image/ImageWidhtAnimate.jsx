import {useNode} from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import { ImageSettings } from './ImageSetting';

const ImageDiv = styled.div`
  position: relative;
  grid-area:${({ gridArea }) =>
  `${gridArea}`};
  width: 100%;
  overflow: hidden;
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

export const ImageWidhtAnimate = (props) => {
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
      </a>
    </ImageDiv>
  );
};

ImageWidhtAnimate.craft = {
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
