import { AppNavigator } from '../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';
import { NAVIGATE_NAVIGATION_ACTION } from '../actions/NavigationActions';
import { SUCCESS_AUTH_ACTION, LOGOUT_AUTH_ACTION } from '../actions/AuthActions';
import { INITIALIZE_APP_LOGGED_IN_GENERAL_ACTION, INITIALIZE_APP_NOT_LOGGED_IN_GENERAL_ACTION } from '../actions/GeneralActions';
import { START_SESSION_HOST_ACTION } from '../actions/HostActions';
import { START_SESSION_PARTICIPANT_ACTION } from '../actions/ParticipantActions';

const firstAction = AppNavigator.router.getActionForPathAndParams('AppInitialization');
const initialNavigationState = AppNavigator.router.getStateForAction(firstAction);

export default function(state = initialNavigationState, action) {
  let error;
  switch(action.type) {
		case NAVIGATE_NAVIGATION_ACTION:
			return AppNavigator.router.getStateForAction(
				NavigationActions.navigate({
					routeName: action.routeName
				}),
				state
			);
		case SUCCESS_AUTH_ACTION:
			return AppNavigator.router.getStateForAction(
				NavigationActions.navigate({
					routeName: "Home"
				}),
				state
			);
		case INITIALIZE_APP_LOGGED_IN_GENERAL_ACTION:
			return AppNavigator.router.getStateForAction(
				NavigationActions.navigate({
					routeName: "Home"
				}),
				state
			);
		case INITIALIZE_APP_NOT_LOGGED_IN_GENERAL_ACTION:
			return AppNavigator.router.getStateForAction(
				NavigationActions.navigate({
					routeName: "Login"
				}),
				state
			);
		case LOGOUT_AUTH_ACTION:
			return AppNavigator.router.getStateForAction(
				NavigationActions.navigate({
					routeName: "Login"
				}),
				state
			);
    case START_SESSION_HOST_ACTION:
			return AppNavigator.router.getStateForAction(
				NavigationActions.navigate({
					routeName: "Shooot"
				}),
				state
			);
    case START_SESSION_PARTICIPANT_ACTION:
			return AppNavigator.router.getStateForAction(
				NavigationActions.navigate({
					routeName: "Shooot"
				}),
				state
			);
	  default:
	    return state;
  }
}
