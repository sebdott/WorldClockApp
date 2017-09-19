import { LOAD_SELECTED_CITIES, ADD_SELECTED_CITIES, REMOVE_SELECTED_CITIES } from '../actions/actionTypes'

const selectedCities = (state = { items: [] }, action) => {
    switch (action.type) {
        case LOAD_SELECTED_CITIES:
            return {
                ...state,
                isLoading: action.isLoading,
                items: action.cities
            }
        case ADD_SELECTED_CITIES:
        return {
            ...state,
            items: [...state.items.map(city => city), action.cityToAdd].map(city => city)
        }
        case REMOVE_SELECTED_CITIES:
            return {
                ...state,
                items: state.items.filter((city) => city.Id !== action.id)
            }
        default:
            return state
    }
}

export default selectedCities;