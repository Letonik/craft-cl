import { useNode, useEditor } from '@craftjs/core';
import React from 'react';
import ContentEditable from 'react-contenteditable';

import { TextSettings } from './TextSettings';
import styled from "styled-components";

export const Text = ({
  fontSize,
  textAlign,
  fontWeight,
  color,
  shadow,
  text,
  margin,
  colorHover,
  textTransform
}) => {
  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));


  return (
      <ContentEditable
        innerRef={connect}
        disabled={!enabled}
        onChange={(e) => {
          setProp((prop) => (prop.text = e.target.value), 500);
        }}
        html={text}
        tagName="h2"
        style={{
          width: '100%',
          margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
          fontSize: `${fontSize}px`,
          textShadow: `0px 0px 2px rgba(0,0,0,${(shadow || 0) / 100})`,
          fontWeight,
          textAlign,
          hover: {color: `rgba(${Object.values(colorHover)})`},
          color:`rgba(${Object.values(color)})`,
          textTransform
        }}
      />
  );
};

Text.craft = {
  displayName: 'Text',
  props: {
    fontSize: '15',
    textAlign: 'left',
    fontWeight: '500',
    color: { r: 155, g: 55, b: 105, a: 0.5 },
    colorHover:  { r: 155, g: 55, b: 105, a: 0.5 },
    margin: [0, 0, 0, 0],
    shadow: 0,
    text: 'Text',
  },
  related: {
    toolbar: TextSettings,
  },
};
