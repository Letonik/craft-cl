import {useNode, useEditor, Element} from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import { ImageSettings } from './ImageSetting';
import {ForDropHeader} from "../ForDrop/ForDropHeader";

const ImageDiv = styled.div`
  position: relative;
  grid-area:${({ gridArea }) =>
  `${gridArea}`};
  width: 100%;
  img {
    width: 100%;
    height: ${({ height }) =>
  `${height}`};
  }
`;

const defaultProps = {
  gridArea: '',
  src: 'http://localhost:5000/hor.png',
  link: ''
};

export const ImageHeader = (props) => {
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
        <Element canvas is={ForDropHeader} id="wow33" />
      </a>
    </ImageDiv>
  );
};

ImageHeader.craft = {
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