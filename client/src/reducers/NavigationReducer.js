import { AppNavigator } from '../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';
import { NAVIGATE_NAVIGATION_ACTION } from '../actions/NavigationActions';

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
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
	  default:
	    return state;
  }
}
