import React from 'react';
import MainContainer from "../../components/MainContainer";
import {useSelector} from "react-redux";
import {getLocationSelector} from "../../store/selectors/selectors";
import {getLocation} from "../../store/reducers/locationReducer";
import {wrapper} from "../../store/store";
import * as axios from "axios";
import Locations from "../../components/Locations/Locations";

const Land = () => {
  const locations = useSelector(state => getLocationSelector(state));

  return (
    <MainContainer>
      <Locations locations={locations}/>
    </MainContainer>
  );
};
export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const response = await axios.get("http://localhost:5000/api/location")
  await store.dispatch(await getLocation(response.data))
})
export default Land
