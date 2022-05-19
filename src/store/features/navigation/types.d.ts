export type NavigationState = {
  redirect: string | null;
};

export type NavigationClearRedirectAction = {
  type: 'NAVIGATION_CLEAR_REDIRECT',
};

export type NavigationSetRedirectAction = {
  type: 'NAVIGATION_SET_REDIRECT',
  payload: {
    redirect: string
  }
};

export type NavigationAction = NavigationClearRedirectAction | NavigationSetRedirectAction;
