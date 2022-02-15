import {tempsAPI} from "../../api/api";

const SET_LOCATION = "SET_LOCATION";

let initialState = {
 locations: []
};

const locationReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state, locations: action.data
      }
    default:
      return state;
  }
}

export const setLocation = data => ({type: SET_LOCATION, data});

export const getLocation = (data) => {
  return async (dispatch) => {
      dispatch(setLocation(data));
  }
}
export const createTemp = (name, code) => {
  return async (dispatch) => {
    const locations = await tempsAPI.createTemp(name, code)
    dispatch(setLocation(locations.data));
  }
}

export default locationReducer;
