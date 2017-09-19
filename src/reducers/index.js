import { combineReducers } from 'redux'
import cities from './cityReducer';
import selectedCities from './selectedCityReducer';
import loading from './loadingReducer';
import language from './languageReducer';
import UTCDateTime from './dateTimeReducer';

const rootReducer = combineReducers({
  cities,
  selectedCities,
  loading,
  UTCDateTime,
  language
})

export default rootReducer
