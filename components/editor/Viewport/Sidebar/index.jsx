import { useEditor } from '@craftjs/core';
import { Layers } from '@craftjs/layers';
import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Toolbar } from '../../Toolbar';
import { MyComponents } from "../../MyComponents";

export const SidebarDiv = styled.div`
  width: 280px;
  opacity: ${(props) => (props.enabled ? 1 : 0)};
  background: #2c2d31;
  margin-right: ${(props) => (props.enabled ? 0 : -280)}px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: '#2c2d31',
    color: '#ffffff'
  },
  elems: {
    background: '#28282c',
    color: '#ffffff'
  },
  elemsBlock: {
    background: '#28282c',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
}));

export const Sidebar = () => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <SidebarDiv enabled={enabled} className="sidebar transition bg-white w-2">
     {/* <div className="flex flex-col h-full">
        <SidebarItem
          icon={CustomizeIcon}
          title="Компоненты"
          height={!layersVisible ? 'full' : '55%'}
          visible={componentsVisible}
          onChange={(val) => setComponentsVisible(val)}
        >
          <MyComponents />
        </SidebarItem>
        <SidebarItem
          icon={CustomizeIcon}
          title="Стили"
          height={!layersVisible ? 'full' : '55%'}
          visible={toolbarVisible}
          onChange={(val) => setToolbarVisible(val)}
        >
          <Toolbar />
        </SidebarItem>
        <SidebarItem
          icon={LayerIcon}
          title="Дерево"
          height={!toolbarVisible ? 'full' : '45%'}
          visible={layersVisible}
          onChange={(val) => setLayerVisible(val)}
        >
          <div className="">
            <Layers expandRootOnLoad={true} />
          </div>
        </SidebarItem>
      </div>*/}
      <div className={classes.root}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            className={classes.elems}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Компоненты</Typography>
          </AccordionSummary>
          <AccordionDetails
            className={classes.elemsBlock}
          >
            <MyComponents />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            className={classes.elems}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Стили</Typography>
          </AccordionSummary>
          <AccordionDetails
            className={classes.elemsBlock}
          >
            <Toolbar />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            className={classes.elems}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>Дерево</Typography>
          </AccordionSummary>
          <AccordionDetails
            className={classes.elemsBlock}
          >
            <div className="">
              <Layers expandRootOnLoad={true} />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </SidebarDiv>
  );
};
