
const SET_MEDIA = "SET_MEDIA";

let initialState = {
 media: 'desktop',
 maxWidth: '100%',
 minHeight: '800px'
};

const mediaReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_MEDIA:
      return {
        ...state,
        media: action.device,
        maxWidth: action.width,
        minHeight: action.height,
      }
    default:
      return state;
  }
}

export const setMedia = (device, width, height) => ({type: SET_MEDIA, device, width, height});

export const changeMedia = (device) => {
  return async (dispatch) => {
    let width = '';
    let height = '';
      if(device === 'desktop') {
        width = '100%';
        height = '800px';
      }
      if(device === 'tablet') {
        width = '820px';
        height = '1180px';
      }
      if(device === 'phone') {
        width = '375px';
        height = '667px';
      }
      dispatch(setMedia(device, width, height));
  }
}


export default mediaReducer;
