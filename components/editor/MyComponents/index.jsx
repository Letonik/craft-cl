import {Element, useEditor} from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import ButtonSvg from '../../../public/icons/toolbox/button.svg';
import SquareSvg from '../../../public/icons/toolbox/rectangle.svg';
import TypeSvg from '../../../public/icons/toolbox/text.svg';
import YoutubeSvg from '../../../public/icons/toolbox/video-line.svg';
import ImageSvg from '../../../public/icons/image2.svg';
import SwiperSvg from '../../../public/icons/layout-slider_1.svg';
import {Button} from '../../selectors/Button';
import {Container} from '../../selectors/Container';
import {Text} from '../../selectors/Text';
import {Video} from '../../selectors/Video';
import {Image} from "../../selectors/Image";
import {SwiperCom} from "../../selectors/Swiper";
import {OneImage} from "../../selectors/ImageComponent";
import {OneSwiper} from "../../selectors/Swiper/SwiperComponent";
import Tooltip from "@mui/material/Tooltip";


const Subsection = styled.div`
    h2 {
      background: #fff;
      text-align: center;
      font-weight: bold;
    }
    &>div {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 13px 0;
    }
    
`;


const Item = styled.a`
    width: 100px;
    height: 100px;
    box-shadow: 0px 0px 5px 1px rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;  
    background: #28282c;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 12px;
    div {
      color:  #ffffff;
      width: 70px;
      height: 70px;
       svg {
        width: 100%;
        height: 100%;
        fill: #ffffff;
      }
    }
    .widthText {
       height: 90px;
       svg {
          width: 70px;
          height: 60px;
          fill: #ffffff;
        }
        div {
          text-align: center
        }
      width: 100%;
    }
    &:hover {
      padding: 12px;
      border: 3px solid #13c2c2;
        svg {
          fill: #13c2c2;
        }
        div {
          color: #13c2c2;
        }
    }
  ${(props) =>
  props.move &&
  `
    cursor: move;
  `}
`;

export const MyComponents = () => {
  const {
    connectors: {create},
  } = useEditor(() => ({}));

  return (
    <div className=" pt-3">

      <Subsection>
        <h2>??????????</h2>
        <div>
          <div
            style={{display: 'flex'}}
            ref={(ref) =>
              create(
                ref,
                <Container
                  background={{r: 78, g: 78, b: 78, a: 1}}
                  color={{r: 0, g: 0, b: 0, a: 1}}
                  height="300px"
                  width="300px"
                />
              )
            }
          >
            <Tooltip title="Container" placement="right">
              <Item className="m-2 pb-2 cursor-pointer block" move>
                <div>
                  <SquareSvg/>
                </div>
              </Item>
            </Tooltip>
          </div>
        </div>
      </Subsection>

      <Subsection>
        <h2>????????????????</h2>
        <div>
          <div
            ref={(ref) =>
              create(ref, <Text fontSize="18" textAlign="left" text="Hi there"/>)
            }
          >
            <Tooltip title="Text" placement="right">
              <Item className="m-2 pb-2 cursor-pointer block" move>
                <div>
                  <TypeSvg/>
                </div>
              </Item>
            </Tooltip>
          </div>
          <div ref={(ref) => create(ref, <Video/>)}>
            <Tooltip title="Video" placement="right">
              <Item className="m-2 pb-2 cursor-pointer block" move>
                <div>
                  <YoutubeSvg/>
                </div>
              </Item>
            </Tooltip>
          </div>
          <div ref={(ref) => create(ref, <OneImage/>)}>
            <Tooltip title="Image" placement="right">
              <Item className="m-2 pb-2 cursor-pointer block" move>
                <div>
                  <ImageSvg/>
                </div>
              </Item>
            </Tooltip>
          </div>
          <div ref={(ref) => create(ref, <OneSwiper/>)}>
          <Tooltip title="Swiper" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <div>
                <SwiperSvg/>
              </div>
            </Item>
          </Tooltip>
        </div>
        </div>
      </Subsection>

      <Subsection>
        <h2>????????????</h2>
        <div>
          <div ref={(ref) => create(ref, <Button
            buttonStyle="outline"
            color={{ r: 255, g: 255, b: 255, a: 1 }}
            colorHover={{ r: 179, g: 179, b: 179, a: 1 }}
            background={{ r: 255, g: 255, b: 255, a: 1 }}
            backgroundHover={{ r: 179, g: 179, b: 179, a: 1 }}
            textTransform='uppercase'
            />)}>
            <Tooltip title="Button" placement="right">
              <Item className="m-2 pb-2 cursor-pointer block" move>
                <div className='widthText'>
                  <ButtonSvg/>
                  <div>??????????</div>
                </div>
              </Item>
            </Tooltip>
          </div>
          <div ref={(ref) => create(ref, <Button
            buttonStyle="outline"
            color={{ r: 0, g: 0, b: 0, a: 1 }}
            colorHover={{ r: 179, g: 179, b: 179, a: 1 }}
            background={{ r: 0, g: 0, b: 0, a: 1 }}
            backgroundHover={{ r: 179, g: 179, b: 179, a: 1 }}
            textTransform='uppercase'
          />)}>
            <Tooltip title="Button" placement="right">
              <Item className="m-2 pb-2 cursor-pointer block" move>
                <div className='widthText'>
                  <ButtonSvg/>
                  <div>????????????</div>
                </div>
              </Item>
            </Tooltip>
          </div>
        </div>
      </Subsection>
    </div>
    /*   </ToolboxDiv>*/
  );
};