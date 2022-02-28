import {useNode, useEditor, Element} from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';
import {SwiperSettings} from "./SwiperSettings";
import { Carousel } from 'react-responsive-carousel';
import {Image} from "../Image";
import {ImageSlider} from "../Image/ImageSlider";

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
  amountEl: [
    {
      image: "http://localhost:5000/hor.jpeg"
    },
   /* {
      image: "http://localhost:5000/hor.jpeg"
    }*/
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

  const { src, link } = props;

  const clickLink = (e) => {
    if (!link) {
      e.preventDefault()
    }
  }


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
        <ImageSlider
          gridArea='l'
          height='100%'
          src='http://localhost:5000/hor.jpeg'
        />
        <ImageSlider
          gridArea='l'
          height='100%'
          src='http://localhost:5000/hor.jpeg'
        />
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