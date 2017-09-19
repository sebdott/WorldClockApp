import {LOAD_LANGUAGE, CHANGE_LANGUAGE} from './actionTypes'
import LanguageHelper from '../common/languageHelper';

export const loadLanguageActionCreator = (languages) => ({
  type: LOAD_LANGUAGE,
  languages: languages
})

export const changeLanguageActionCreator = (languageType, languages) => ({
  type: CHANGE_LANGUAGE,
  languages: languages,
  languageType: languageType
})


export const loadLanguageDispatch = () => (dispatch) => {
  let languages = LanguageHelper.getLanguageList('cn');
  return dispatch(loadLanguageActionCreator(languages));
}

export const changeLanguageDispatch = (languageType) => (dispatch) => {
  let languages = LanguageHelper.getLanguageList(languageType);
  return dispatch(changeLanguageActionCreator(languageType, languages));
}