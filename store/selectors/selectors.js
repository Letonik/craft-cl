export const getLocationSelector = (state) => {
  return state.locationReducer.locations;
}
export const getMediaSelector = (state) => {
  return state.mediaReducer.media;
}
export const getWidthSelector = (state) => {
  return state.mediaReducer.maxWidth;
}
export const getHeightSelector = (state) => {
  return state.mediaReducer.minHeight;
}