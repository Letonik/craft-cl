import React from 'react';
import styled from "styled-components";
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import { createMuiTheme } from '@material-ui/core';
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    error: {
      main: '#f44336',
    }
  },
});

const Items = ({templates}) => {
  console.log(templates)
  const Templates = styled.div`
    margin: 90px auto;
    width: 100%;
    max-height: 700px;
    overflow: hidden;
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 28px;
      height: 55px;
      border-radius: 28px;
      box-shadow: 0px 0px 7px 1px rgba(29, 29, 29, 0.8);
      margin: 15px 20px;
      padding: 0 10px;
    }
  
`;


  return (
    <ThemeProvider theme={theme}>
    <Templates>
      {templates.map(item =>
        <div className='item'>
          <div>
            {item.active ?
              <Fab size="small" color="secondary" >
                <CheckIcon />
              </Fab>
              :
              <Fab size="small" color="gray">
                <CheckIcon />
              </Fab>
            }
          </div>
          <div>
            <Fab size="small" color='gray'>
              <DeleteIcon />
            </Fab>
          </div>
        </div>
      )}
    </Templates>
    </ThemeProvider>
  );
};

export default Items;