import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 30vh auto;
    width: 500px;
    text-align: center;
    font-size: 70px;
    font-weight: bold;
    color: #13c2c2;
    span {
        text-shadow: rgb(29, 29, 29) 1px 0 10px;;
    }
`;

const Container = ({text}) => {
    return (
        <Wrapper>
            <span>{text}</span>
        </Wrapper>
    );
};

export default Container;