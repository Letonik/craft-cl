import {useNode, useEditor, Element} from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import { ImageSettings } from '../Image/ImageSetting';
import {ForDrop} from "../ForDrop";
import {ForDropWidthAnimateText} from "../ForDrop/ForDropWidthAnimateText";

const ImageDiv = styled.div`
  position: relative;
  grid-area:${({ gridArea }) =>
  `${gridArea}`};
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: ${({ height }) =>
  `${height}`};
  }
`;

const defaultProps = {
  gridArea: '',
  src: 'http://localhost:5000/ver.jpg',
  link: '',
  height: 'auto'
};

export const ImageWidhtAnimateText = (props) => {
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
        <Element canvas is={ForDropWidthAnimateText} id="wow33" src={src}/>
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
