import {useNode, useEditor, Element} from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import { ImageSettings } from './ImageSetting';
import {Button} from "../Button";
import {Text} from "../Text";
import {TextSlider} from "../Text/TextSlider";

const ImageDiv = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: ${({ height }) =>
  `${height}`};
  z-index:10;
  }
  .upper {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index:20;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const defaultProps = {
  gridArea: '',
  src: 'http://localhost:5000/ver.jpg',
  link: ''
};

export const ImageSlider = (props) => {
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
        <div className='upper'>
          <div className='textSl'>
            <TextSlider color={{ r: 0, g: 0, b: 0, a: 1 }}  text='Some Text'/>
          </div>
          <div className='buttonSl'>
            <Button
              buttonStyle="outline"
              color={{ r: 255, g: 255, b: 255, a: 1 }}
              colorHover={{ r: 179, g: 179, b: 179, a: 1 }}
              background={{ r: 255, g: 255, b: 255, a: 1 }}
              backgroundHover={{ r: 179, g: 179, b: 179, a: 1 }}
              textTransform='uppercase'
            />
          </div>
        </div>
      </a>
    </ImageDiv>
  );
};
