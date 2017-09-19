import { LOAD_LANGUAGE, CHANGE_LANGUAGE } from '../actions/actionTypes'

const language = (state = {}, action) => {
    switch (action.type) {
        case LOAD_LANGUAGE:
            if (state.languages != null && state.languages.ContainsValue == 'true') {
                return state;
            }
            else {
                return {
                    ...state,
                    languages: action.languages
                };
            }
        case CHANGE_LANGUAGE:
            return {
                ...state,
                languages: action.languages,
                languageType: action.languageType
            };
        default:
            return state
    }
}

export default language;