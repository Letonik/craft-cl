import React from 'react';
import styled from "styled-components";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ModalCreater from "./ModalCreater";

const Creator = styled.div`
    margin: auto;
    width: 300px;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-radius: 28px;
    padding: 0 20px;
    color: gray;
    box-shadow: 0px 0px 7px 1px rgba(29, 29, 29, 0.8);
`;

const CreateTemp = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ModalCreater open={open} handleClose={handleClose}/>
            <Creator>
                <div>СОЗДАТЬ</div>
                <div
                    className='plus'
                    onClick={handleOpen}
                >
                    <Fab size="medium" color="secondary" aria-label="add">
                        <AddIcon/>
                    </Fab>
                </div>
                <div>ШАБЛОН</div>
            </Creator>
        </>
    );
};

export default CreateTemp;