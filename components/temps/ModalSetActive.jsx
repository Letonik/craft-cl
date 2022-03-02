import React, {useRef, useState} from 'react';
import {makeStyles} from "@mui/styles";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useDispatch } from 'react-redux'
import { setActive} from "../../store/reducers/locationReducer";
import {useRouter} from "next/router";
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
      width: 410px;
      text-align: center;
      color: gray;
      font-size: 20px;
`;
const Btn = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: center;
`;


export default function ModalSetActive({open, handleClose, id}) {
    const dispatch = useDispatch();
    const router = useRouter()
    const {id: code} = router.query
    const changeActive = () => {
        dispatch(setActive(id, code))
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
                                Вы уверены?
                            </Text>
                            <Btn>
                                <Button
                                    style={{marginRight: '20px'}}
                                    variant="outlined"
                                    color="secondary"
                                    onClick={changeActive}
                                >
                                    КОНЕЧНО
                                </Button>
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  onClick={handleClose}
                                >
                                    ЕЩЕ ПОДУМАЮ
                                </Button>
                            </Btn>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}