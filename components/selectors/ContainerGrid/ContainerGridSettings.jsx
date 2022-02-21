import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor';

export const ContainerGridSettings = () => {
  return (
    <React.Fragment>

      <ToolbarSection
        title="Отступы"
        props={['paddingWidth', 'paddingHeight']}
      >
        <ToolbarItem
          full={true}
          propKey="paddingWidth"
          type="slider"
          label="Отступ по горизонтали"
        />
        <ToolbarItem
          full={true}
          propKey="paddingHeight"
          type="slider"
          label="Отступ по вертикали"
        />
        <ToolbarItem
          full={true}
          propKey="gap"
          type="slider"
          label="Внутренние отступы"
        />
      </ToolbarSection>
    </React.Fragment>
  );
};
