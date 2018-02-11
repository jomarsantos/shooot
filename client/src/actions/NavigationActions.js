export const NAVIGATE_NAVIGATION_ACTION = 'NAVIGATE_NAVIGATION_ACTION';

export function navigate(routeName) {
	return {
		type: NAVIGATE_NAVIGATION_ACTION,
		routeName: routeName,
	};
}
