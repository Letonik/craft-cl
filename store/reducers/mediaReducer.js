
const SET_MEDIA = "SET_MEDIA";

let initialState = {
 media: 'desktop'
};

const mediaReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_MEDIA:
      return {
        ...state, media: action.data
      }
    default:
      return state;
  }
}

export const setMedia = data => ({type: SET_MEDIA, data});

export const changeMedia = (device) => {
  return async (dispatch) => {
      dispatch(setMedia(device));
  }
}


export default mediaReducer;
