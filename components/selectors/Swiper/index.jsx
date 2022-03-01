import {useNode, useEditor, Element} from '@craftjs/core';
import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {SwiperSettings} from "./SwiperSettings";
import {Image} from "../Image";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const SwiperDiv = styled.div`
  position: relative;
  width: 100%;
`;

const defaultProps = {
  gridArea: '',
  autoPlay: 'false'
};
function Item({i})
{
  const [height, setHeight] = useState('844.3125px')
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (document.getElementById('myPaper') !== null) {
      setWidth(document.getElementById('myPaper').offsetWidth)
    }
  }, [document.getElementById('myPaper'), height])
  useEffect(() => {
    let newHeight = width * 9 / 16
    setHeight(newHeight + 'px')
  }, [width])
  console.log(height)
  return (
    <Paper style={{height: height}} id='myPaper'>
      <Element
        key={i}
        canvas
        id={'a' + i}
        height={height}
        src='http://localhost:5000/hor.jpeg'
        is={Image} />
    </Paper>
  )
}
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

  var items = [1, 2]

  return (
/*    <SwiperDiv>*/
      <Carousel
        style={{overflow: 'none', height: '100%'}}
        ref={connect} {...props}
/*        autoPlay={false}*/
/*        indicators={false}*/

      >
        {
          items.map( (item) => <Item key={item} i={item} /> )
        }
      </Carousel>
/*   </SwiperDiv>*/
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