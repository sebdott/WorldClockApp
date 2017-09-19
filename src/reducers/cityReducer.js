import { LOAD_CITIES, REMOVE_CITIES, ADD_CITIES } from '../actions/actionTypes'

const cities = (state = { items: [] }, action) => {

    switch (action.type) {
        case LOAD_CITIES:
            return {
                ...state,
                items: action.cities,
                isLoading: action.isLoading
            }
        case ADD_CITIES:
            return {
                ...state,
                items: [...state.items.map(city => city), action.cityToAdd].map(city => city)
            }
        case REMOVE_CITIES:
            return {
                ...state,
                items: state.items.filter((item) => item.Id !== action.id)
            }
        default:
            return state
    }
}

export default cities;