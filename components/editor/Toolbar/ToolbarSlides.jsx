import React from "react";
import Button from "@material-ui/core/Button";
import {ToolbarImage} from "./ToolbarImage";

export const ToolbarSlides = ({ title, value, onChange }) => {
  const a = () => {
    console.log(value)
  }

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


  return (
    <>
      {
        value.map(i =>
          <>
          <h2>Слайд {i.id}</h2>
            <ToolbarImage value={}/>
            </>
        )
      }
</>
    /*  <InputLabel>{title}</InputLabel>
      <Select native value={value} onChange={(e) => onChange(e.target.value)}>
        {children}
      </Select>*/


  );
};