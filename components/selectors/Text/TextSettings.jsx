import React from 'react';

import { capitalize, weightDescription } from '../../../utils/text';
import { ToolbarSection, ToolbarItem } from '../../editor/index';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';

export const TextSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Типография"
        props={['fontSize', 'fontWeight', 'textAlign']}
        summary={({ fontSize, fontWeight, textAlign }) => {
          return `${fontSize || ''}, ${weightDescription(
            fontWeight
          )}, ${capitalize(textAlign)}`;
        }}
      >
        <ToolbarItem propKey="fontFamily" type="radio" label="Шрифт">
          <ToolbarRadio value="Bodoni Cyrillic" label="Bodoni" />
          <ToolbarRadio value="Futura PT" label="Futura" />
        </ToolbarItem>
        <ToolbarItem
          full={true}
          propKey="fontSize"
          type="slider"
          label="Размер"
        />
        <ToolbarItem propKey="textAlign" type="radio" label="Расположение">
          <ToolbarRadio value="left" label="Лево" />
          <ToolbarRadio value="center" label="Центр" />
          <ToolbarRadio value="right" label="Право" />
        </ToolbarItem>
        <ToolbarItem propKey="fontWeight" type="radio" label="Толшина">
          <ToolbarRadio value="400" label="400" />
          <ToolbarRadio value="500" label="500" />
          <ToolbarRadio value="700" label="700" />
        </ToolbarItem>
      </ToolbarSection>
      <ToolbarSection
        title="Отступы"
        props={['margin']}
        summary={({ margin }) => {
          return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
            margin[3] || 0
          }px`;
        }}
      >
        <ToolbarItem propKey="margin" index={0} type="slider" label="Верх" />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Право" />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Низ" />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Лево" />
      </ToolbarSection>
      <ToolbarSection
        title="Декор"
        props={['color', 'shadow', 'colorHover']}
        summary={({ color, shadow, colorHover }) => {
          return (
            <div className="fletext-right">
              <p
                style={{
                  color: color && `rgba(${Object.values(color)})`,
                  textShadow: `0px 0px 2px rgba(0, 0, 0, ${shadow / 100})`,
                  hover: {color: colorHover && `rgba(${Object.values(colorHover)})`}
                }}
                className="text-white text-right"
              >
                T
              </p>
            </div>
          );
        }}
      >
        <ToolbarItem full={true} propKey="color" type="color" label="Цвет" />
        <ToolbarItem full={true} propKey="colorHover" type="color" label="Цвет при наведении" />
        <ToolbarItem
          full={true}
          propKey="shadow"
          type="slider"
          label="Тени"
        />
      </ToolbarSection>
    </React.Fragment>
  );
};
