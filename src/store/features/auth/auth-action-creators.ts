import { Dispatch } from 'redux';
import AuthService, { AuthResponseBody } from '../../../services/auth-service';
import { Credentials } from '../../../types';
import {
  AuthSuccessAction,
  AuthFailureAction,
  AuthLoadingAction,
  AuthLogoutAction,
  AuthClearErrorAction,
  AuthActionType,
} from './auth-types';
import {
  createNavigationSetRedirectAction,
  navigationClearRedirectAction,
} from '../navigation/navigation-action-creators';
import { AppAction } from '../../redux-types';

export const authLoadingAction: AuthLoadingAction = {
  type: AuthActionType.AUTH_LOADING,
};

export const authClearErrorAction: AuthClearErrorAction = {
  type: AuthActionType.AUTH_CLEAR_ERROR,
};

export const authLogoutAction: AuthLogoutAction = {
  type: AuthActionType.AUTH_LOGOUT,
};

export const createAuthSuccessAction = (authResponseBody: AuthResponseBody): AuthSuccessAction => ({
  type: AuthActionType.AUTH_SUCCESS,
  payload: authResponseBody,
});

export const createAuthFailureAction = (error: string): AuthFailureAction => ({
  type: AuthActionType.AUTH_FAILURE,
  payload: { error },
});

const authenticate = async (
  dispatch: Dispatch<AppAction>,
  authCallback: () => Promise<AuthResponseBody>,
  redirect: string,
) => {
  dispatch(authLoadingAction);
  try {
    const authResponseBody = await authCallback();
    const authSuccessAction = createAuthSuccessAction(authResponseBody);
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

export const createAuthenticateActionThunk = (token: string, redirect: string) => async (
  dispatch: Dispatch<AppAction>,
): Promise<void> => {
  await authenticate(dispatch, async () => AuthService.authenticate(token), redirect);
};

export const createLoginActionThunk = (
  credentials: Credentials,
  redirect: string,
) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  await authenticate(dispatch, async () => AuthService.login(credentials), redirect);
};

// OLD ONE
// export const createLoginActionThunk = (
//   credentials: Credentials,
//   redirect: string,
// ) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
//   dispatch(authLoadingAction);
//   try {
//     const user = await AuthService.login(credentials);
//     const authSuccessAction = createAuthSuccessAction(user);
//     const navigationSetRedirectAction = createNavigationSetRedirectAction(redirect);
//     dispatch(navigationSetRedirectAction);
//     dispatch(authSuccessAction);
//     dispatch(navigationClearRedirectAction);
//   } catch (error) {
//     const errMsg = error instanceof Error ? error.message : String(error);
//     const authFailureAction = createAuthFailureAction(errMsg);
//     dispatch(authFailureAction);
//   }
// };
