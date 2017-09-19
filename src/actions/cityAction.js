import CitiesApi from '../api/citiesApi'
import { loadingDispatch } from './loadingAction'
import { LOAD_CITIES, ADD_CITIES, REMOVE_CITIES } from './actionTypes'

export const loadCitiesActionCreator = cities => ({
    type: LOAD_CITIES,
    cities: cities.map(child => child),
    isLoading: false
})

export const addCitiesActionCreator = city => ({
    type: ADD_CITIES,
    cityToAdd: city,
    isLoading: false
})

export const removeCitiesActionCreator = cityId => ({
    type: REMOVE_CITIES,
    id: cityId,
    isLoading: false
})

export const addCitiesDispatch = city => (dispatch) => {
    return dispatch(addCitiesActionCreator(city));
}

export const removeCitiesDispatch = cityId => (dispatch) => {
    return dispatch(removeCitiesActionCreator(cityId));
}

export const loadCitiesDispatch = (citiesAll) => (dispatch) => {

    dispatch(loadingDispatch(true))
    if (citiesAll === undefined || citiesAll.length <= 0) {
        return CitiesApi.loadApiValue().then(cities => {
            dispatch(loadCitiesActionCreator(cities))
        })
            .then(() => { dispatch(loadingDispatch(false)) })
            .catch(error => {
                throw (error);
            });
    }
    else {
        return new Promise((resolve, reject) => {
            resolve(Object.assign(dispatch, dispatch(loadCitiesActionCreator(citiesAll))));
        }).then(() => { dispatch(loadingDispatch(false)) })
            .catch(error => {
                throw (error);
            });

    }
}