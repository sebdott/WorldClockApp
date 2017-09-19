import { LOADING } from '../actions/actionTypes'

const loading = (state = { }, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

export default loading;