import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor/index';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';

export const ButtonSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Цвета"
        props={['background', 'color', 'backgroundHover', 'colorHover']}
        summary={({ background, color, backgroundHover, colorHover }) => {
          return (
            <div className="flex flex-row-reverse">
              <div
                style={{
                  background:
                    background && `rgba(${Object.values(background)})`,
                  hover: {background:
                    backgroundHover && `rgba(${Object.values(backgroundHover)})`},
                }}
                className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
              >
                <p
                  style={{
                    color: color && `rgba(${Object.values(color)})`,
                    hover: {color: colorHover && `rgba(${Object.values(colorHover)})`},
                  }}
                  className="text-white w-full text-center"
                >
                  T
                </p>
              </div>
            </div>
          );
        }}
      >
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Фон"
        />
        <ToolbarItem
          full={true}
          propKey="backgroundHover"
          type="bg"
          label="Фон при наведении"
        />
        <ToolbarItem full={true} propKey="color" type="color" label="Текст" />
        <ToolbarItem full={true} propKey="colorHover" type="color" label="Текст при наведении" />
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
        <ToolbarItem propKey="margin" index={0} type="slider" label="Сверху" />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Справа" />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Снизу" />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Слева" />
        <ToolbarItem propKey="alignSelf" type="radio" label="Прижать">
          <ToolbarRadio value="auto" label="Авто" />
          <ToolbarRadio value="start" label="Начало" />
          <ToolbarRadio value="center" label="Центр" />
          <ToolbarRadio value="end" label="Конец" />
        </ToolbarItem>
      </ToolbarSection>
      <ToolbarSection title="Стиль">
        <ToolbarItem propKey="buttonStyle" type="radio" label="Style">
          <ToolbarRadio value="full" label="С фоном" />
          <ToolbarRadio value="outline" label="Без фона" />
        </ToolbarItem>
      </ToolbarSection>
    </React.Fragment>
  );
};
