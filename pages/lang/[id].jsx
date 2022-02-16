import React, {useMemo} from 'react';
import MainContainer from "../../components/MainContainer";
import {useSelector} from "react-redux";
import {getLocationSelector} from "../../store/selectors/selectors";
import * as axios from "axios";
import {wrapper} from "../../store/store";
import Templates from "../../components/temps/Templates";
import {getLocation} from "../../store/reducers/locationReducer";
import {useRouter} from "next/router";

const Temps = () => {
  const locations = useSelector(state => getLocationSelector(state));
  const router = useRouter()
  const {id} = router.query
  const templates = useMemo(() => {
    return locations.filter(loc => loc.code === id)[0].temps;
  }, [locations])
  console.log(templates)
  return (
    <MainContainer>
      <Templates templates={templates}/>
    </MainContainer>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const response = await axios.get("http://localhost:5000/api/location")
  await store.dispatch(await getLocation(response.data))
})
export default Temps;