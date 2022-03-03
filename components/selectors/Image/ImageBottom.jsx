import {useNode, useEditor, Element} from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import { ImageSettings } from './ImageSetting';
import {ForDropBottom} from "../ForDrop/ForDropBottom";
import {Text} from "../Text";

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
  box-sizing: border-box;
`;

const defaultProps = {
  gridArea: '',
  src: 'https://mobirise.com/bootstrap-carousel/assets2/images/thomas-smith-399133-1707x2560.jpg',
  link: '',
  height: 'auto',
};

export const ImageBottom = (props) => {
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
          <Element canvas is={ForDropBottom} id="woww33">
            <Text fontSize='20' color={{ r: 0, g: 0, b: 0, a: 1 }}  text='Some Text'/>
          </Element>
      </a>
    </ImageDiv>
  );
};

ImageBottom.craft = {
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
