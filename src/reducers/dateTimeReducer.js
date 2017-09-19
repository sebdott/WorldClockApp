import { LOAD_CURRENT_UTC_DATETIME } from '../actions/actionTypes'

const  UTCDateTime = (state= { current : new Date() }, action) => {

    var now = new Date(); 
    switch (action.type) {
        case LOAD_CURRENT_UTC_DATETIME:
            return {
                ...state,
                current :  new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds())
            }
        default:
            return state
    }
}
export default UTCDateTime;