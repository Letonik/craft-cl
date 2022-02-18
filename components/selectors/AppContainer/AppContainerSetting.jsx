import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor/index';

export const AppContainerSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Dimensions"
        props={['height']}
        summary={({height }) => {
          return `${height || 0}`;
        }}
      >
        <ToolbarItem propKey="height" type="text" label="Height" />
      </ToolbarSection>
      <ToolbarSection
        title="Фон"
        props={['background', 'color']}
        summary={({ background, color }) => {
          return (
            <div className="flex flex-row-reverse">
              <div
                style={{
                  background:
                    background && `rgba(${Object.values(background)})`,
                }}
                className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
              >
                <p
                  style={{
                    color: color && `rgba(${Object.values(color)})`,
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
          label="Background"
        />
      </ToolbarSection>

      <ToolbarSection
        title="Внутренние отступы"
        props={['padding']}
        summary={({ padding }) => {
          return `${padding[0] || 0}px ${padding[1] || 0}px ${
            padding[2] || 0
          }px ${padding[3] || 0}px`;
        }}
      >
        <ToolbarItem propKey="padding" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="padding" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="padding" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="padding" index={3} type="slider" label="Left" />
      </ToolbarSection>

    </React.Fragment>
  );
};
