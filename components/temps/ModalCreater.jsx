import React, {useRef, useState} from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux'
import {createTemp} from "../../store/reducers/locationReducer";
import {useRouter} from "next/router";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


const Text = styled.div`
    #outlined-basic {
      width: 410px;
    }
`;
const Btn = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: center;
`;


export default function ModalCreater({open, handleClose}) {
/*  const classes = useStyles();*/
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const router = useRouter()
  const {id} = router.query
  const createNewTemp = () => {
    dispatch(createTemp(name, id))
    handleClose()
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
            <form noValidate autoComplete="off">
              <Text>
                <TextField
                  id="outlined-basic"
                  label="Название"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Text>
              <Btn>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={createNewTemp}
                >
                  СОЗДАТЬ
                </Button>
              </Btn>
            </form>
        </Box>
      </Modal>
    </div>
  );
}