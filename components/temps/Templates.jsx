import React from 'react';
import CreateTemp from "./CreateTemp";
import styled from "styled-components";
import ModalCreater from "./ModalCreater";
import Items from "./Items";


const Container = styled.div`
    margin: 15vh auto;
    width: 900px;
`;



const Templates = ({templates}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <CreateTemp handleOpen={handleOpen}/>
      <ModalCreater open={open} handleClose={handleClose}/>
      <Items templates={templates}/>
    </Container>
  );
};

export default Templates;