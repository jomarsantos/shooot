import { combineReducers } from 'redux';
import GeneralReducer from './GeneralReducer';
import HostReducer from './HostReducer';
import NavigationReducer from './NavigationReducer';

const rootReducer = combineReducers({
	general: GeneralReducer,
	host: HostReducer,
  navigation: NavigationReducer
});

export default rootReducer;
