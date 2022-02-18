import React from 'react';
import {useEditor, useNode} from "@craftjs/core";
import {useSelector} from "react-redux";
import {getHeightSelector, getWidthSelector} from "../../../store/selectors/selectors";
import {AppContainerSettings} from "./AppContainerSetting";

const defaultProps = {
  padding: ['0', '0', '0', '0'],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  width: '100%',
  height: 'auto',
  minHeight: '700px',
};

export const AppContainer = (props) => {

  const maxWidth = useSelector(state => getWidthSelector(state));
  const minHeight = useSelector(state => getHeightSelector(state));
  props = {
    ...defaultProps,
    ...props,
  };

  const { connectors: {connect, drag} } = useNode();
  const ar = [1, 3, 4]
  const {
    children,
    padding,
    background
  } = props;
  return (
    <div
      ref={ref=> connect(drag(ref))}

      style={{
        background: `rgba(${Object.values(background)})`,
        maxWidth: maxWidth,
        width: '100%',
        minHeight: minHeight,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {children}

    </div>
  );
};

AppContainer.craft = {
  displayName: 'Container',
  props: defaultProps,
  rules: {
    canDrag: () => false,
  },
  related: {
    toolbar: AppContainerSettings,
  },
};






