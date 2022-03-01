import { useNode } from '@craftjs/core';
import { Grid, Slider, RadioGroup } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React from 'react';

import { ToolbarDropdown } from './ToolbarDropdown';
import { ToolbarTextInput } from './ToolbarTextInput';
import {ToolbarImage} from "./ToolbarImage";
import {ToolbarSlides} from "./ToolbarSlides";

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const sliders = [
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
]

const SliderStyled = withStyles({
  root: {
    color: '#13c2c2',
    height: 2,
    padding: '5px 0',
    width: '100%',
  },
  thumb: {
    height: 14,
    width: 14,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -7,
    marginLeft: -7,
    '&:focus,&:hover,&$active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 11px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

export const ToolbarItem = ({
  full = false,
  propKey,
  type,
  onChange,
  index,
  ...props
}) => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props[propKey],
  }));
  const value = Array.isArray(propValue) ? propValue[index] : propValue;

  return (
    <Grid item xs={full ? 12 : 6}>
      <div className="mb-2">
        {['text', 'color', 'bg', 'number'].includes(type) ? (
          <ToolbarTextInput
            {...props}
            type={type}
            value={value}
            onChange={(value) => {
              setProp((props) => {
                if (Array.isArray(propValue)) {
                  props[propKey][index] = onChange ? onChange(value) : value;
                } else {
                  props[propKey] = onChange ? onChange(value) : value;
                }
              }, 500);
            }}
          />
        ) : type === 'slider' ? (
          <>
            {props.label ? (
              <h4 className="text-sm text-light-gray-2">{props.label}</h4>
            ) : null}
            <SliderStyled
              value={parseInt(value) || 0}
              onChange={
                ((_, value) => {
                  setProp((props) => {
                    if (Array.isArray(propValue)) {
                      props[propKey][index] = onChange
                        ? onChange(value)
                        : value;
                    } else {
                      props[propKey] = onChange ? onChange(value) : value;
                    }
                  }, 1000);
                })
              }
            />
          </>
        ) : type === 'radio' ? (
          <>
            {props.label ? (
              <h4 className="text-sm text-light-gray-2">{props.label}</h4>
            ) : null}
            <RadioGroup
              value={value || 0}
              onChange={(e) => {
                const value = e.target.value;
                setProp((props) => {
                  props[propKey] = onChange ? onChange(value) : value;
                });
              }}
            >
              {props.children}
            </RadioGroup>
          </>
        ) : type === 'select' ? (
          <ToolbarDropdown
            value={value || ''}
            onChange={(value) =>
              setProp(
                (props) =>
                  (props[propKey] = onChange ? onChange(value) : value)
              )
            }
            {...props}
          />
        ) : type === 'images' ? (
          <ToolbarImage
            value={value || ''}
            onChange={(value) =>
              setProp(
                (props) =>
                  (props[propKey] = onChange ? onChange(value) : value)
              )
            }
            {...props}
          />
        ) : type === 'slides' ? (
          <ToolbarSlides
            value={value || sliders}
            onChange={(value) =>
              setProp(
                (props) =>
                  (props[propKey] = onChange ? onChange(value) : value)
              )
            }
            {...props}
          />
        ) : null}
      </div>
    </Grid>
  );
};
