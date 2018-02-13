import { combineReducers } from 'redux';
import GeneralReducer from './GeneralReducer';
import HostReducer from './HostReducer';
import ParticipantReducer from './ParticipantReducer';
import NavigationReducer from './NavigationReducer';

const rootReducer = combineReducers({
	general: GeneralReducer,
	host: HostReducer,
	participant: ParticipantReducer,
  navigation: NavigationReducer
});

export default rootReducer;
