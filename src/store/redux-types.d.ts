import { ThunkDispatch } from 'redux-thunk';
import { AuthAction, AuthState } from './features/auth/types';
import { NavigationAction, NavigationState } from './features/navigation/types';
import { ReduxTestAction, ReduxTestState } from './features/redux-test/types';

export type RootState = {
  reduxTest: ReduxTestState,
  auth: AuthState,
  navigation: NavigationState,
};

export type AppAction = AuthAction | NavigationAction | ReduxTestAction;

export type AppDispatch = ThunkDispatch<RTCIceConnectionState, undefined, AppAction>;
