import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor/index';
import {ToolbarRadio} from "../../editor/Toolbar/ToolbarRadio";

export const ForDropSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Выравнивание элементов">
        <ToolbarItem propKey="justifyContent" type="radio" label="По вертикали">
          <ToolbarRadio value="flex-start" label="Верх" />
          <ToolbarRadio value="center" label="Центр" />
          <ToolbarRadio value="flex-end" label="Низ" />
          <ToolbarRadio value="space-evenly" label="Расстояние 1" />
          <ToolbarRadio value="space-around" label="Расстояние 2" />
          <ToolbarRadio value="space-between" label="Расстояние 3" />
        </ToolbarItem>
        <ToolbarItem propKey="alignItems" type="radio" label="По горизонтали">
          <ToolbarRadio value="flex-start" label="Лево" />
          <ToolbarRadio value="center" label="Центр" />
          <ToolbarRadio value="flex-end" label="Право" />
        </ToolbarItem>
      </ToolbarSection>
    </React.Fragment>
  );
};
