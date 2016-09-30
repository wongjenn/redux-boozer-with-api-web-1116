import { combineReducers } from 'redux';
import cocktailsReducer from './cocktails_reducer';

const rootReducer =  combineReducers({
  cocktails: cocktailsReducer
});

export default rootReducer;
