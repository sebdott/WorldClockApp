import {LOADING} from './actionTypes'

export const loadingAppActionCreator = isLoading => ({
  type: LOADING,
  isLoading: isLoading
})

export const loadingDispatch = (isLoading) => (dispatch) => {
  return dispatch(loadingAppActionCreator(isLoading));
}