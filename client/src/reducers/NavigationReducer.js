import { AppNavigator } from '../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';
import { NAVIGATE_NAVIGATION_ACTION } from '../actions/NavigationActions';
import { SUCCESS_LOGIN_ACTION } from '../actions/LoginActions';
import { INITIALIZE_APP_LOGGED_IN_GENERAL_ACTION } from '../actions/GeneralActions';

const firstAction = AppNavigator.router.getActionForPathAndParams('Login');
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
		case SUCCESS_LOGIN_ACTION:
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
	  default:
	    return state;
  }
}
