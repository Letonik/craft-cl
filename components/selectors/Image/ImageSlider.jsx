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
    justify-content: ${({ justifyContent }) =>
  `${justifyContent}`};
    align-items: ${({ alignItems }) =>
  `${alignItems}`};
  }
`;

const defaultProps = {
  gridArea: '',
  src: 'http://localhost:5000/ver.jpg',
  link: '',
  colorText: { r: 0, g: 0, b: 0, a: 1 },
  buttonStyle: 'outline',
  colorButton: { r: 255, g: 255, b: 255, a: 1 },
  colorButtonHover: { r: 179, g: 179, b: 179, a: 1 },
  backgroundButton: { r: 255, g: 255, b: 255, a: 1 },
  backgroundButtonHover: { r: 179, g: 179, b: 179, a: 1 },
  textButton: 'Button',
  text: 'Some Text',
  justifyContent: 'center',
  alignItems: 'center',
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
            <TextSlider color={props.colorText}  text={props.text}/>
          </div>
          <div className='buttonSl'>
            <Button
              buttonStyle={props.buttonStyle}
              color={props.colorButton}
              colorHover={props.colorButtonHover}
              background={props.backgroundButton}
              backgroundHover={props.backgroundButtonHover}
              textTransform='uppercase'
              text={props.textButton}
            />
          </div>
        </div>
      </a>
    </ImageDiv>
  );
};
