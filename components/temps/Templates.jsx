import React from 'react';
import CreateTemp from "./CreateTemp";
import styled from "styled-components";
import Items from "./Items";


const Container = styled.div`
    margin: 15vh auto;
    width: 900px;
`;



const Templates = ({templates}) => {

  return (
    <Container>
      <CreateTemp/>
      <Items templates={templates}/>
    </Container>
  );
};

export default Templates;