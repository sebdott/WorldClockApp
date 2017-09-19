import { LOAD_SELECTED_CITIES, ADD_SELECTED_CITIES, REMOVE_SELECTED_CITIES } from './actionTypes'
import { loadingDispatch } from './loadingAction'

export const loadSelectedCitiesActionCreator = cities => ({
    type: LOAD_SELECTED_CITIES,
    cities: cities.map(child => child),
    isLoading: false
})

export const addSelectedCitiesActionCreator = city => ({
    type: ADD_SELECTED_CITIES,
    cityToAdd: city,
    isLoading: false
})

export const removeSelectedCitiesActionCreator = (cityId) => ({
    type: REMOVE_SELECTED_CITIES,
    id: cityId,
    isLoading: false
})

export const addSelectedCitiesDispatch = city => (dispatch) => {
    return dispatch(addSelectedCitiesActionCreator(city));
}

export const removeSelectedCitiesDispatch = cityId => (dispatch) => {
    return dispatch(removeSelectedCitiesActionCreator(cityId));
}

export const loadSelectedCitiesDispatch = (citiesAll) => (dispatch) => {

    dispatch(loadingDispatch(true))
    
    if (citiesAll === undefined || citiesAll.length <= 0) {

        return [];
    }
    else {
        return new Promise((resolve, reject) => {
            resolve(Object.assign(dispatch, dispatch(loadSelectedCitiesActionCreator(citiesAll))));
        }).then(() => { dispatch(loadingDispatch(false)) })
            .catch(error => {
                throw (error);
            });
    }
}
