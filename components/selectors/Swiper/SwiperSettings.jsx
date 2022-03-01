import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor/index';
import {ToolbarRadio} from "../../editor/Toolbar/ToolbarRadio";

export const SwiperSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Путь и ссылка">
        <ToolbarItem
          full={true}
          propKey="src"
          type="images"
          label="Путь к изображению"
        />
      </ToolbarSection>
      <ToolbarSection
        title="Настройки"
        props={['autoPlay']}
      >
        <ToolbarItem propKey="autoPlay" type="radio" label="Автовоспроизведение">
          <ToolbarRadio value={'true'} label="Да" />
          <ToolbarRadio value={'false'} label="Нет" />
        </ToolbarItem>
      </ToolbarSection>
    {/*  <ToolbarSection title="Путь и ссыsddsdfлка">
        <ToolbarItem
          full={true}
          propKey="sliders"
          type="slides"
          label="Путь к sasasю"
        />
      </ToolbarSection>*/}
    </React.Fragment>
  );
};
