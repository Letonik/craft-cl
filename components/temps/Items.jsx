import React from 'react';
import styled from "styled-components";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useRouter} from "next/router";
import ModalSetActive from "./ModalSetActive";
import Fab from "@mui/material/Fab";

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
      color: gray;
      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 300px;
      }
    }
  
`;

const Items = ({templates}) => {
    const [open, setOpen] = React.useState(false);
    const [id, setId] = React.useState('');
    const handleClose = () => setOpen(false);
    const handleOpen = (id) => {
        setId(id)
        setOpen(true)
    }
    const router = useRouter();
  const {id: code} = router.query
    return (
        <>
            <ModalSetActive open={open} handleClose={handleClose} id={id}/>
            <Templates>
                {templates.map(item =>
                    <div className='item' key={item._id}>
                        <div>
                            <Fab
                                size="small"
                                color={item.active ? "secondary" : "gray"}
                                onClick={() => handleOpen(item._id)}
                            >
                                <CheckIcon/>
                            </Fab>
                        </div>
                        <div>{item.name}</div>
                        <div className='right'>
                            <div>
                                {new Date(item.createdOn).toLocaleString()}</div>
                            <div>
                                <Fab
                                    size="small" color='primary'
                                    style={{marginRight: '15px'}}
                                    onClick={() => router.push({pathname: `/editor/${code}/${item._id}`})}
                                >
                                    <EditIcon/>
                                </Fab>
                                <Fab size="small" color='gray'>
                                    <DeleteIcon/>
                                </Fab>
                            </div>
                        </div>
                    </div>
                )}
            </Templates>
        </>
    );
};

export default Items;