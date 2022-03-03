import { useEditor } from '@craftjs/core';
import { Layers } from '@craftjs/layers';
import React, { useState } from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Toolbar } from '../../Toolbar';
import { MyComponents } from "../../MyComponents";
import {makeStyles} from "@mui/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";

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
