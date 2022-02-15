import React from 'react';
import {$url} from "../../api/api";
import styled from "styled-components";
import {useRouter} from "next/router";

const Container = styled.div`
    margin: 15vh auto;
    width: 500px;
    .item {
      margin: 15px auto;
      width: 450px;
      display: flex;
      justify-content: start;
      align-items: center;
      height: 60px;
      border-radius: 30px;
      cursor:pointer;
      color: gray;
      font-weight: bold;
      box-shadow: 0px 0px 15px 2px rgba(29, 29, 29, 0.8);
      &:hover {
   /*     height: 64px;*/
         width: 475px;
         border-radius: 32px;
      }
      img {
        padding 0 50px 0 100px;
      }
    }
`;

const Locations = ({locations}) => {
  const router = useRouter()
  return (
    <Container>
      {locations.map((loc) =>
        <div
          key={loc._id}
          className='item'
          onClick={() => router.push({ pathname: '/lang/' + loc.code})}
        >
          <div className='image'><img src={$url + loc.image} alt="flag"/></div>
          <div>{loc.name}</div>
        </div>
      )}
    </Container>
  );
};

export default Locations;