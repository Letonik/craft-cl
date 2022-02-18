import { Element, useNode } from '@craftjs/core';
import React from 'react';

import { Container } from '../Container';


export const OneAndFour = () => {
  return (
    <Container
      flexDirection='row'
      padding={['40', '40', '40', '40']}
      background={{ r: 255, g: 255, b: 255, a: 1 }}
      flexWrap='nowrap'
      boxSizing='border-box'
    >
      <Element
        canvas id="left4"
        is={Container}
        width='49%'
        margin={['0', '10', '0', '0']}
        background={{ r: 255, g: 255, b: 255, a: 1 }}
      >
        <img src="/test.jpg" alt=""
          style={{width: '100%'}}
        />
      </Element>
      <Element
        canvas id="right4"
        is={Container}
        width='50%'
        margin={['0', '0', '0', '0']}
        background={{ r: 255, g: 255, b: 255, a: 1 }}
        flexWrap='nowrap'
        maxWidth='50%'
      >
        <Element
          canvas id="up4"
          is={Container}
          flexDirection='row'
          background={{ r: 255, g: 255, b: 255, a: 1 }}
          flexWrap='nowrap'
          margin={['0', '0', '10', '0']}
        >
          <Element
            canvas id="1in4"
            is={Container}
            width='auto'
            margin={['0', '5', '0', '0']}
            background={{ r: 255, g: 255, b: 255, a: 1 }}
            maxWidth='50%'
          >
            <img src="/test.jpg" alt=""
                 style={{width: '100%'}}
            />
          </Element>
          <Element
            canvas id="2in4"
            is={Container}
            width='auto'
            margin={['0', '0', '0', '5']}
            background={{ r: 255, g: 255, b: 255, a: 1 }}
            maxWidth='50%'
          >
            <img src="/test.jpg" alt=""
                 style={{width: '100%'}}
            />
          </Element>
        </Element>
        <Element
          canvas id="down4"
          is={Container}
          flexDirection='row'
          background={{ r: 255, g: 255, b: 255, a: 1 }}
          flexWrap='nowrap'
          margin={['0', '0', '0', '0']}
          justifyContent='space-between'
        >
          <Element
            canvas id="3in4"
            is={Container}
            width='auto'
            margin={['0', '5', '0', '0']}
            background={{ r: 255, g: 255, b: 255, a: 1 }}
            maxWidth='50%'
          >
            <img src="/test.jpg" alt=""
                 style={{width: '100%'}}
            />
          </Element>
          <Element
            canvas id="4in4"
            is={Container}
            width='auto'
            margin={['0', '0', '0', '5']}
            background={{ r: 255, g: 255, b: 255, a: 1 }}
            maxWidth='50%'
          >
            <img src="/test.jpg" alt=""
                 style={{width: '100%'}}
            />
          </Element>
        </Element>
      </Element>
    </Container>
  );
};

OneAndFour.craft = {
  ...Container.craft,
  displayName: '1 - 4',
};
