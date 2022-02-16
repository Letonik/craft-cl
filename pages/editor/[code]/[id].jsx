import {Editor, Frame, Element, useEditor} from '@craftjs/core';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
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

const theme = createMuiTheme({
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
    /*const json = lz.decompress(lz.decodeBase64(stateToLoad));
    actions.deserialize(json);*/
  }, [])
  return (
        <ThemeProvider theme={theme}>
          <div className="h-full h-screen">
            <Editor
              resolver={{
                Container,
                Text,
                Custom1,
                Custom2,
                Custom2VideoDrop,
                Custom3,
                Custom3BtnDrop,
                OnlyButtons,
                Button,
                Video,
              }}
              enabled={false}
              onRender={RenderNode}
            >
              <Viewport temp={temp} media={media}>
                <Frame>
                  <Element
                    canvas
                    is={Container}
                    width="100%"
                    minHeight="500px"
                    height="auto"
                    background={{ r: 255, g: 255, b: 255, a: 1 }}
                    padding={['40', '40', '40', '40']}
                    custom={{ displayName: 'App' }}
                  >
{/*

                    <Element
                      canvas
                      is={Container}
                      background={{ r: 39, g: 41, b: 41, a: 1 }}
                      flexDirection="column"
                      width="100%"
                      height="auto"
                      padding={['40', '40', '40', '40']}
                      margin={['0', '0', '40', '0']}
                      custom={{ displayName: 'ComplexSection' }}
                    >
                      <Element
                        canvas
                        background={{
                          r: 76,
                          g: 78,
                          b: 78,
                          a: 0,
                        }}
                        is={Container}
                        flexDirection="row"
                        margin={['0', '0', '0', '0']}
                        width="100%"
                        height="auto"
                        alignItems="center"
                        custom={{ displayName: 'Wrapper' }}
                      >
                        <Element
                          canvas
                          background={{
                            r: 0,
                            g: 0,
                            b: 0,
                            a: 0,
                          }}
                          is={Container}
                          alignItems="center"
                          padding={['0', '0', '0', '0']}
                          flexDirection="row"
                          width="350px"
                          height="250px"
                          custom={{ displayName: 'Square' }}
                        >
                          <Element
                            canvas
                            is={Container}
                            justifyContent="center"
                            alignItems="center"
                            background={{
                              r: 76,
                              g: 78,
                              b: 78,
                              a: 1,
                            }}
                            shadow={25}
                            width="90%"
                            height="90%"
                            padding={['10', '20', '10', '20']}
                            custom={{ displayName: 'Outer' }}
                          >
                            <Element
                              canvas
                              is={Container}
                              justifyContent="center"
                              alignItems="center"
                              background={{
                                r: 76,
                                g: 78,
                                b: 78,
                                a: 1,
                              }}
                              shadow={50}
                              width="80%"
                              height="80%"
                              padding={['10', '20', '10', '20']}
                              custom={{ displayName: 'Middle' }}
                            >
                              <Element
                                canvas
                                is={Container}
                                justifyContent="center"
                                alignItems="center"
                                background={{
                                  r: 76,
                                  g: 78,
                                  b: 78,
                                  a: 1,
                                }}
                                shadow={50}
                                width="60%"
                                height="60%"
                                padding={['10', '20', '10', '20']}
                                custom={{ displayName: 'Inner' }}
                              />
                            </Element>
                          </Element>
                        </Element>

                      </Element>
                    </Element>

                    <Element
                      canvas
                      is={Container}
                      background={{ r: 39, g: 41, b: 41, a: 1 }}
                      flexDirection="column"
                      width="100%"
                      height="auto"
                      padding={['40', '40', '40', '40']}
                      margin={['0', '0', '40', '0']}
                      custom={{ displayName: 'ComplexSection' }}
                    >

                      <Custom2
                        background={{
                          r: 108,
                          g: 126,
                          b: 131,
                          a: 1,
                        }}
                        height="400px"
                        width="100%"
                        padding={['0', '0', '0', '20']}
                        margin={['0', '0', '0', '0']}
                        shadow={40}
                        flexDirection="row"
                        alignItems="center"
                      />

                    </Element>
*/}

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
