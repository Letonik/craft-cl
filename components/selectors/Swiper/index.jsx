import {useNode, useEditor, Element} from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';
import {SwiperSettings} from "./SwiperSettings";
import { Carousel } from 'react-responsive-carousel';

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
      id: 1,
      image: "https://alarmtrade.ru/wp-content/uploads/2017/02/10425.jpg"
    },
    {
      id: 2,
      image: "https://alarmtrade.ru/wp-content/uploads/2017/02/10425.jpg"
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
     /*   stopOnHover={true}*/
     /*   swipeable={true}*/
      >
        {props.amountEl.map(i =>
          <div key={i.id}>
            <img src={i.image} />
          </div>
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
