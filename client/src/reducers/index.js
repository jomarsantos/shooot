import { combineReducers } from 'redux';
import GeneralReducer from './GeneralReducer';
import UserReducer from './UserReducer';
import HostReducer from './HostReducer';
import ParticipantReducer from './ParticipantReducer';
import NavigationReducer from './NavigationReducer';

const rootReducer = combineReducers({
	general: GeneralReducer,
	user: UserReducer,
	host: HostReducer,
	participant: ParticipantReducer,
  navigation: NavigationReducer
});

export default rootReducer;
