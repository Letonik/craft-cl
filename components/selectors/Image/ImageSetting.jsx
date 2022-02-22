import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor/index';

export const ImageSettings = () => {
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
    </React.Fragment>
  );
};
