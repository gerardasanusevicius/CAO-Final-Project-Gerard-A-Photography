import { NavigationClearRedirectAction, NavigationSetRedirectAction } from './types';

export const navigationClearRedirectAction: NavigationClearRedirectAction = {
  type: 'NAVIGATION_CLEAR_REDIRECT',
};

export const createNavigationSetRedirectAction = (redirect: string): NavigationSetRedirectAction => ({
  type: 'NAVIGATION_SET_REDIRECT',
  payload: { redirect },
});
