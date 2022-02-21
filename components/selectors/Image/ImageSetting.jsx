import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor/index';

export const ImageSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Путь и ссылка">
        <ToolbarItem
          full={true}
          propKey="src"
          type="text"
          label="Путь к изображению"
        />
      </ToolbarSection>
    </React.Fragment>
  );
};
