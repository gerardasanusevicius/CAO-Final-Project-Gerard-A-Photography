import { NavigationActionType, NavigationClearRedirectAction, NavigationSetRedirectAction } from './types';

export const navigationClearRedirectAction: NavigationClearRedirectAction = {
  type: NavigationActionType.NAVIGATION_CLEAR_REDIRECT,
};

export const createNavigationSetRedirectAction = (redirect: string): NavigationSetRedirectAction => ({
  type: NavigationActionType.NAVIGATION_SET_REDIRECT,
  payload: { redirect },
});
