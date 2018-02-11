import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';

const rootReducer = combineReducers({
  navigation: NavigationReducer
});

export default rootReducer;
