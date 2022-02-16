import React, {useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { useDispatch } from 'react-redux'
import { setActive} from "../../store/reducers/locationReducer";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        marginTop: '13vh',
        height: '150px',
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
      width: 350px;
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
    const classes = useStyles();
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
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}