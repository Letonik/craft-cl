import React, {useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { useDispatch } from 'react-redux'
import {createTemp} from "../../store/reducers/locationReducer";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    marginTop: '13vh',
    height: '170px',
    justifyContent: 'center',
    position: "relative"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '3px',
    position: "relative",
    left: '35px'
  },
}));

const Text = styled.div`
    #outlined-basic {
      width: 350px;
    }
`;
const Btn = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: center;
`;


export default function ModalCreater({open, handleClose}) {
  const classes = useStyles();
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
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
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
          </div>
        </Fade>
      </Modal>
    </div>
  );
}