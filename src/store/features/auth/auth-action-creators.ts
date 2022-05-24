import { Dispatch } from 'redux';
import AuthService from './auth-service';
import { Admin, Credentials } from '../../../types';
import {
  AuthSuccessAction,
  AuthFailureAction,
  AuthLoadingAction,
  AuthLogoutAction,
  AuthClearErrorAction,
  AuthActionType,
} from './types';
import {
  createNavigationSetRedirectAction,
  navigationClearRedirectAction,
} from '../navigation/navigation-action-creators';
import { AppAction } from '../../types';

export const authLoadingAction: AuthLoadingAction = {
  type: AuthActionType.AUTH_LOADING,
};

export const authClearErrorAction: AuthClearErrorAction = {
  type: AuthActionType.AUTH_CLEAR_ERROR,
};

export const authLogoutAction: AuthLogoutAction = {
  type: AuthActionType.AUTH_LOGOUT,
};

export const createAuthSuccessAction = (user: Admin): AuthSuccessAction => ({
  type: AuthActionType.AUTH_SUCCESS,
  payload: { user },
});

export const createAuthFailureAction = (error: string): AuthFailureAction => ({
  type: AuthActionType.AUTH_FAILURE,
  payload: { error },
});

export const createLoginAction = (
  credentials: Credentials,
  redirect: string,
) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(authLoadingAction);
  try {
    const user = await AuthService.login(credentials);
    const authSuccessAction = createAuthSuccessAction(user);
    const navigationSetRedirectAction = createNavigationSetRedirectAction(redirect);
    dispatch(navigationSetRedirectAction);
    dispatch(authSuccessAction);
    dispatch(navigationClearRedirectAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const authFailureAction = createAuthFailureAction(errMsg);
    dispatch(authFailureAction);
  }
};
