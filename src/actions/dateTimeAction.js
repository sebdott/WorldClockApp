import {LOAD_CURRENT_UTC_DATETIME} from './actionTypes'

export const loadCurrentUTCDateTimeActionCreator = () => ({
  type: LOAD_CURRENT_UTC_DATETIME
})

export const loadCurrentUTCDateTimeDispatch = () => (dispatch) => {
  return dispatch(loadCurrentUTCDateTimeActionCreator());
}