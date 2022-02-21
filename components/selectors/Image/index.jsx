import {useNode, useEditor, Element} from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import { ImageSettings } from './ImageSetting';
import {ForDrop} from "../ForDrop";

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
  src: 'https://mobirise.com/bootstrap-carousel/assets2/images/thomas-smith-399133-1707x2560.jpg',
  link: ''
};

export const Image = (props) => {
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
        <Element canvas is={ForDrop} id="wow33" />
      </a>
    </ImageDiv>
  );
};

Image.craft = {
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
