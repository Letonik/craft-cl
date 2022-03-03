import {Editor, Frame, Element, useEditor} from '@craftjs/core';
import React, {useEffect, useMemo} from 'react';

import { Viewport, RenderNode } from '../../../components/editor';
import { Container, Text } from '../../../components/selectors';
import { Button } from '../../../components/selectors/Button';
import { Custom1, OnlyButtons } from '../../../components/selectors/Custom1';
import { Custom2, Custom2VideoDrop } from '../../../components/selectors/Custom2';
import { Custom3, Custom3BtnDrop } from '../../../components/selectors/Custom3';
import { Video } from '../../../components/selectors/Video';
import {wrapper} from "../../../store/store";
import * as axios from "axios";
import {getLocation} from "../../../store/reducers/locationReducer";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {getLocationSelector, getMediaSelector} from "../../../store/selectors/selectors";
import {AppContainer} from "../../../components/selectors/AppContainer";
import {Image} from "../../../components/selectors/Image";
import {ImageWidhtAnimateText} from "../../../components/selectors/Image/ImageWidhtAnimateText";
import {ImageWidhtAnimatePrice} from "../../../components/selectors/Image/ImageWidhtAnimatePrice";
import {ImageWidhtAnimate} from "../../../components/selectors/Image/ImageWidhtAnimate";
import {ContainerGrid} from "../../../components/selectors/ContainerGrid";
import {OneAndFourGrid} from "../../../components/selectors/Templates/OneAndFourGrid";
import {ForDrop} from "../../../components/selectors/ForDrop";
import {ThreeColumnsGrid} from "../../../components/selectors/Templates/ThreeColumnsGrid";
import {TwoColumnsGrid} from "../../../components/selectors/Templates/TwoColumnsGrid";
import {FourColumnsGrid} from "../../../components/selectors/Templates/FourColumnsGrid";
import {CustomGrid} from "../../../components/selectors/Templates/CustomGrid";
import {ImageBottom} from "../../../components/selectors/Image/ImageBottom";
import {TwoColumnsBottom} from "../../../components/selectors/Templates/TwoColumnsBottom";
import {ForDropBottom} from "../../../components/selectors/ForDrop/ForDropBottom";
import {ThreeColumnsBottom} from "../../../components/selectors/Templates/ThreeColumnsBottom";
import {FourColumnsBottom} from "../../../components/selectors/Templates/FourColumnsBottom";
import {TextForGrid} from "../../../components/selectors/TextForGrid";
import {TwoColumnsText} from "../../../components/selectors/Templates/TwoColumnsText";
import {ThreeColumnsText} from "../../../components/selectors/Templates/ThreeColumnsText";
import {FourColumnsText} from "../../../components/selectors/Templates/FourColumnsText";
import {SwiperCom} from "../../../components/selectors/Swiper";
import {OneImage} from "../../../components/selectors/ImageComponent";
import {OneSwiper} from "../../../components/selectors/Swiper/SwiperComponent";
import {ImageSlider} from "../../../components/selectors/Image/ImageSlider";
import {TextSlider} from "../../../components/selectors/Text/TextSlider";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {ColumnsGrid2x1} from "../../../components/selectors/Templates/ColumnsGrid2x1";
import {ColumnsGrid1x1x1} from "../../../components/selectors/Templates/ColumnsGrid1x1x1";
import {ColumnsGrid1x1x1x1} from "../../../components/selectors/Templates/ColumnsGrid1x1x1x1";
import lz from 'lzutf8';


const theme = createTheme({
  typography: {
    fontFamily: [
      'acumin-pro',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function EditorPage() {
  const router = useRouter()
  const {id, code} = router.query
  const locations = useSelector(state => getLocationSelector(state));
  const media = useSelector(state => getMediaSelector(state));

  const temp = useMemo(() => {
    return  locations.filter(loc => loc.code === code)[0].temps.filter(temp => temp._id === id);
  }, [])
  return (
        <ThemeProvider theme={theme}>
          <div className="h-full h-screen">
            <Editor
              resolver={{
                AppContainer,
                Button,
                Container,
                Custom1,
                Custom2,
                Custom2VideoDrop,
                Custom3,
                Custom3BtnDrop,
                ContainerGrid,
                ColumnsGrid2x1,
                ColumnsGrid1x1x1,
                ColumnsGrid1x1x1x1,
                CustomGrid,
                Image,
                ImageWidhtAnimate,
                ImageWidhtAnimatePrice,
                ImageWidhtAnimateText,
                ImageSlider,
                ImageBottom,
                ForDrop,
                ForDropBottom,
                FourColumnsBottom,
                FourColumnsGrid,
                FourColumnsText,
                OnlyButtons,
                OneImage,
                OneSwiper,
                OneAndFourGrid,
                SwiperCom,
                ThreeColumnsGrid,
                TwoColumnsGrid,
                TwoColumnsBottom,
                ThreeColumnsBottom,
                TextForGrid,
                TwoColumnsText,
                ThreeColumnsText,
                Text,
                TextSlider,
                Video,
              }}
              enabled={false}
              onRender={RenderNode}
            >
              <Viewport temp={temp} media={media}>
                <Frame>
                  <Element
                    canvas
                    is={AppContainer}
                    width="100%"
                    minHeight="500px"
                    height="auto"
                    background={{ r: 255, g: 255, b: 255, a: 1 }}
                    custom={{ displayName: 'App' }}
                  >

                  </Element>
                </Frame>
              </Viewport>
            </Editor>
          </div>
        </ThemeProvider>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const response = await axios.get("http://localhost:5000/api/location")
  await store.dispatch(await getLocation(response.data))
})

export default EditorPage;
