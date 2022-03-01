import {useNode, useEditor, Element} from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';
import {SwiperSettings} from "./SwiperSettings";
import { Carousel } from 'react-responsive-carousel';
import {Image} from "../Image";
import {ImageSlider} from "../Image/ImageSlider";
import {Button} from "../Button";
import {TextSlider} from "../Text/TextSlider";

const SwiperDiv = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: ${({ height }) =>
  `${height}`};
  }
`;

const defaultProps = {
  gridArea: '',
  sliders: [
    {
      id: 1,
      src: 'http://localhost:5000/hor.jpeg',
      link: '',
      colorText: { r: 0, g: 0, b: 0, a: 1 },
      colorButton: { r: 255, g: 255, b: 255, a: 1 },
      buttonStyle: 'outline',
      colorButtonHover: { r: 179, g: 179, b: 179, a: 1 },
      backgroundButton: { r: 255, g: 255, b: 255, a: 1 },
      backgroundButtonHover: { r: 179, g: 179, b: 179, a: 1 },
      textButton: 'Button',
      text: 'Some Text 1',
      justifyContent: 'center',
      alignItems: 'center',
    },
    {
      id: 2,
      src: 'http://localhost:5000/hor.jpeg',
      link: '',
      colorText: { r: 0, g: 0, b: 0, a: 1 },
      colorButton: { r: 255, g: 255, b: 255, a: 1 },
      buttonStyle: 'outline',
      colorButtonHover: { r: 179, g: 179, b: 179, a: 1 },
      backgroundButton: { r: 255, g: 255, b: 255, a: 1 },
      backgroundButtonHover: { r: 179, g: 179, b: 179, a: 1 },
      textButton: 'Button',
      text: 'Some Text 2',
      justifyContent: 'center',
      alignItems: 'center',
    }
  ],
  autoPlay: 'false'
};


export const SwiperCom = (props) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));



  return (
    <SwiperDiv ref={connect} {...props}>
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        autoPlay={(props.autoPlay === 'true') ? true : false}
/*        stopOnHover={true}
        swipeable={true}*/
      >
        {props.sliders.map(i =>
          <ImageSlider
            buttonStyle={i.buttonStyle}
            colorButton={i.colorButton}
            colorButtonHover={i.colorButtonHover}
            backgroundButton={i.backgroundButton}
            backgroundButtonHover={i.backgroundButtonHover}
            textButton={i.textButton}
            colorText={i.colorText}
            text={i.text}
            src={i.src}
            justifyContent={i.justifyContent}
            alignItems={i.alignItems}
          />
        )}
      </Carousel>
   </SwiperDiv>
  );
};

SwiperCom.craft = {
  displayName: 'Слайдер',
  props: defaultProps,
  related: {
    toolbar: SwiperSettings,
  },
  rules: {
    canDrop: () => true,
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true
  },
};